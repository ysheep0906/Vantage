package com.vantage.wordmemo.member.repository

import com.vantage.wordmemo.member.entity.Member
import com.vantage.wordmemo.member.entity.MemberRole
import com.vantage.wordmemo.member.entity.Word
import org.springframework.data.jpa.repository.JpaRepository

//DB관련
interface MemberRepository: JpaRepository<Member, Long>{
    fun findByLoginId(loginId: String): Member?
}

interface MemberRoleRepository : JpaRepository<MemberRole, Long>

interface WordRepository : JpaRepository<Word, Long> {
    // 추후 메소드 추가
}