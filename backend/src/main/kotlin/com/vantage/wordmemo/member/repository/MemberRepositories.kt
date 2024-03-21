package com.vantage.wordmemo.member.repository

import com.vantage.wordmemo.member.entity.*
import org.springframework.data.jpa.repository.JpaRepository

//DB관련
interface MemberRepository: JpaRepository<Member, Long>{
    fun findByLoginId(loginId: String): Member?
}

interface MemberRoleRepository : JpaRepository<MemberRole, Long>

interface WordRepository : JpaRepository<Word, Long> {
    // 추후 메소드 추가
}

interface ProfileImageRepository : JpaRepository<ProfileImage, Long> {
    fun findByMemberId(memberId: Long): List<ProfileImage>
}

interface WordCategoryRepository : JpaRepository<WordCategory, Long> {
}

interface MemberWordRepository : JpaRepository<MemberWord, Long> {
    fun findByMemberId(memberId: Long): List<MemberWord>
}

interface FavoriteWordRepository : JpaRepository<FavoriteWord, Long> {
    fun findByMemberId(memberId: Long): List<FavoriteWord>
}


