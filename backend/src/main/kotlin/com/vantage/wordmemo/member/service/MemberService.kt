package com.vantage.wordmemo.member.service
//endpoint들의 실제 logic

import com.vantage.wordmemo.common.authority.JwtTokenProvider
import com.vantage.wordmemo.common.authority.TokenInfo
import com.vantage.wordmemo.common.exception.InvalidInputException
import com.vantage.wordmemo.common.status.ROLE
import com.vantage.wordmemo.member.dto.LoginDto
import com.vantage.wordmemo.member.dto.MemberDtoRequest
import com.vantage.wordmemo.member.dto.MemberDtoResponse
import com.vantage.wordmemo.member.entity.Member
import com.vantage.wordmemo.member.entity.MemberRole
import com.vantage.wordmemo.member.repository.MemberRepository
import com.vantage.wordmemo.member.repository.MemberRoleRepository
import jakarta.transaction.Transactional
import org.springframework.data.repository.findByIdOrNull
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.stereotype.Service

//member와 관련된 service
@Transactional
@Service
class MemberService(
    private val memberRepository: MemberRepository,
    private val memberRoleRepository: MemberRoleRepository,
    private val authenticationManagerBuilder: AuthenticationManagerBuilder,
    private val jwtTokenProvider: JwtTokenProvider,
) {
    /**
     * 회원가입
     */
    fun signUp(memberDtoRequest: MemberDtoRequest): String{
        //ID중복 검사
        var member: Member? = memberRepository.findByLoginId(memberDtoRequest.loginId)
        if(member != null){ //member가 null이 아니라면 repository에 loginId가 이미 존재하는 것
            throw InvalidInputException("loginId", "이미 등록된 ID 입니다.")
        }

        //member entity를 생성하고 DB에 등록
        member = memberDtoRequest.toEntity()
        memberRepository.save(member) //새로 만든 memeber를 repository에 저장

        //member의 Role을 Member로 설정후 DB에 등록
        val memberRole: MemberRole = MemberRole(null, ROLE.MEMBER, member)
        memberRoleRepository.save(memberRole)

        return "회원가입이 완료되었습니다."
    }

    /**
     * 로그인 -> 토큰 발행
     */
    fun login(loginDto: LoginDto): TokenInfo { //request로 loginDto 정보를 받아 TokenInfo를 반환
        //loginDto를 통해 UsernamePasswordAuthenticationToken를 발행
        val authenticationToken = UsernamePasswordAuthenticationToken(loginDto.loginId, loginDto.password)
        //CustomUserDetailsService내에 loaduserByUsername이 호출되면서 DB의 member 정보와 비교
        val authentication = authenticationManagerBuilder.`object`.authenticate(authenticationToken)

        //문제가 없으면 token을 발행하고 반환
        return jwtTokenProvider.createToken(authentication)
    }

    /**
     * 내 정보 조회
     */
    //회원번호를 받아 Repository에서 member를 조회후 MemberDtoResponse 형식으로 반환
    fun searchMyInfo(id: Long): MemberDtoResponse {
        val member: Member = memberRepository.findByIdOrNull(id) ?: throw InvalidInputException("id", "회원번호(${id})가 존재하지 않는 유저입니다.")
        return member.toDto()
    }

}