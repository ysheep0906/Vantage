package com.vantage.wordmemo.common.service

import com.vantage.wordmemo.common.dto.CustomUser
import com.vantage.wordmemo.member.entity.Member
import com.vantage.wordmemo.member.repository.MemberRepository
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class CustomUserDetailsService(
    private val memberRepository: MemberRepository,
    private val passwordEncoder: PasswordEncoder,
) : UserDetailsService {
    //DB에서 loginId로 검색 -> 없으면 exception
    override fun loadUserByUsername(username: String): UserDetails =
        memberRepository.findByLoginId(username)
            ?.let { createUserDetails(it) } ?: throw UsernameNotFoundException("해당 유저는 없습니다.")

    //user instance를 userdetails로 반환
    private fun createUserDetails(member: Member): UserDetails =
        CustomUser( //token을 생성할 때 claim에 user id도 같이 저장
            member.id!!,
            member.loginId,
            passwordEncoder.encode(member.password),
            member.memberRole!!.map { SimpleGrantedAuthority("ROLE_${it.role}") }
        )
}