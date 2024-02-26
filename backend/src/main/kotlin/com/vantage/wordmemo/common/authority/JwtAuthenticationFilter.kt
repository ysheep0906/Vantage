package com.vantage.wordmemo.common.authority

import jakarta.servlet.FilterChain
import jakarta.servlet.ServletRequest
import jakarta.servlet.ServletResponse
import jakarta.servlet.http.HttpServletRequest
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.util.StringUtils
import org.springframework.web.filter.GenericFilterBean

//token을 검사하는 역할
class JwtAuthenticationFilter(
    private val jwtTokenProvider: JwtTokenProvider
) : GenericFilterBean() {


    override fun doFilter(request: ServletRequest?, response: ServletResponse?, chain: FilterChain?) {
        //request에서 access token을 뽑아옴
        val token = resolveToken(request as HttpServletRequest)

        //token이 존재하고, validation이 문제가 없다면 정상 token이라 판단 -> 정보를 뽑아옴
        if (token != null && jwtTokenProvider.validateToken(token)) {
            val authentication = jwtTokenProvider.getAuthentication(token)
            SecurityContextHolder.getContext().authentication = authentication //뽑아온 정보를 SecurityContextHolder에 기록, 이후에 사용
        }

        chain?.doFilter(request, response)
    }

    //request header에 존재하는 authorization 문자열을 가져와서 bearerToken에 담음
    private fun resolveToken(request: HttpServletRequest): String? {
        val bearerToken = request.getHeader("Authorization")

        return if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer")) {
            bearerToken.substring(7)
        } else {
            null
        }
    }
}