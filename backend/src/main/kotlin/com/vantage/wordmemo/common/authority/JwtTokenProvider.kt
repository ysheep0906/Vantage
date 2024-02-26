package com.vantage.wordmemo.common.authority
//token을 생성하고, token 정보를 추출


import com.vantage.wordmemo.common.dto.CustomUser
import io.jsonwebtoken.*
import io.jsonwebtoken.io.Decoders
import io.jsonwebtoken.security.Keys
import org.springframework.beans.factory.annotation.Value
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Component
import java.util.Date


//토큰 지속시간을 30분으로 설정
const val EXPIRATION_MILLISECONDS: Long = 1000 * 60 * 30

@Component
class JwtTokenProvider{

    @Value("\${jwt.secret}")
    lateinit var secretKey: String

    private val key by lazy { Keys.hmacShaKeyFor(Decoders.BASE64.decode(secretKey))}

    /**
     * Token 생성
     */
    fun createToken(authentication: Authentication): TokenInfo {
        //파라미터로 넘어온 authentication에는 권한들이 존재 -> 권한들을 ,로 구분해 string으로 뽑음
        val authorities: String = authentication
            .authorities
            .joinToString(",", transform = GrantedAuthority::getAuthority)

        val now = Date()
        val accessExpiration = Date(now.time + EXPIRATION_MILLISECONDS)

        // Access Token
        //token 생성 시 token에 너무 많은 정보를 담게 되면 api 호출시 전송되는 양 증가, 또한 개인 정보를 담게 되면 토큰 탈취시 보안 문제 발생
        // => 최소한의 정보만 담는 것이 좋음
        val accessToken = Jwts
            .builder()
            .setSubject(authentication.name)
            .claim("auth", authorities) //권한들을 claim에다가 담음
            .claim("userId", (authentication.principal as CustomUser).userId) //token 생성 시 claim에 userId도 같이 저장
            .setIssuedAt(now) //발행시간
            .setExpiration(accessExpiration) //유효시간
            .signWith(key, SignatureAlgorithm.HS256) //어떤 알고리즘을 사용하는 지 명시
            .compact()

        return TokenInfo("Bearer", accessToken) //우리가 만든 tokenInfo 형식으로 access token을 담아서 반환
    }

    /**
     * Token 정보 추출
     */
    //access token을 받아 authentication 반환
    fun getAuthentication(token: String): Authentication{
        //token의 claim을 꺼내옴
        val claims: Claims = getClaims(token)

        //auth를 뽑아옴, 없으면 예외처리
        val auth = claims["auth"] ?: throw RuntimeException("잘못된 토큰입니다.")
        val userId = claims["userId"] ?: throw RuntimeException("잘못된 토큰입니다.")


        //권한 정보 추출
        val authorities: Collection<GrantedAuthority> = (auth as String)
            .split(",")
            .map { SimpleGrantedAuthority(it) }

        val principal: UserDetails = CustomUser(userId.toString().toLong(), claims.subject, "", authorities)

        //추출한 권한 정보를 토대로 authentication을 반환
        return UsernamePasswordAuthenticationToken(principal, "", authorities)
    }

    /**
     * Token 검증
     */
    fun validateToken(token: String): Boolean {
        try {
            //claim 정보 추출
            getClaims(token)
            return true
        } catch (e: Exception) { //claim을 뽑아오는 과정 중에 exception이 발생하면 case 별로 처리
            when (e) {
                is SecurityException -> {}  // Invalid JWT Token
                is MalformedJwtException -> {}  // Invalid JWT Token
                is ExpiredJwtException -> {}    // Expired JWT Token
                is UnsupportedJwtException -> {}    // Unsupported JWT Token
                is IllegalArgumentException -> {}   // JWT claims string is empty
                else -> {}  // else
            }
            println(e.message)
        }
        return false
    }




    private fun getClaims(token: String) : Claims =
        Jwts.parserBuilder()
            .setSigningKey(key)
            .build()
            .parseClaimsJws(token)
            .body
}