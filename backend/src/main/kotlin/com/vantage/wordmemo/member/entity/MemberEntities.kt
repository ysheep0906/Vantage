package com.vantage.wordmemo.member.entity

import com.vantage.wordmemo.common.status.ROLE
import com.vantage.wordmemo.member.dto.MemberDtoResponse
import jakarta.persistence.*
import java.time.LocalDate
import java.time.format.DateTimeFormatter

//DB관련
@Entity
@Table(
    //loginId도 unique 제약조건 추가
    uniqueConstraints = [UniqueConstraint(name = "uk_member_login_id", columnNames = ["loginId"])]
)
class Member(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long? = null,

    @Column(nullable = false, length = 10)
    val name: String,

    @Column(nullable = false, length = 30, updatable = false)
    val loginId: String,

    @Column(nullable = false, length = 100)
    val password: String,


    @Column(nullable = true, length = 50)
    var nickname: String? = null,

    @Column(nullable = true, length = 100)
    var email: String? = null,

    @Column(nullable = true, length = 50)
    var job: String? = null,

    @Column(nullable = true, length = 100)
    var address: String? = null,

    @Column(nullable = true)
    @Temporal(TemporalType.DATE) //날짜만 입력 가능
    var birthDate: LocalDate? = null,

    /* 사용 미정
    @Column(nullable = ture, length = 5)
    @Enumerated(EnumType.STRING)
    val gender: Gender,
    */

){
    //member entity에서 member role을 조회할 수 있도록 연결
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "member")
    val memberRole: List<MemberRole>? = null

    //birthDate형식을 String으로 변환해 반환하는 함수
    private fun LocalDate.formatDate(): String =
        this.format(DateTimeFormatter.ofPattern("yyyyMMdd"))

    //MemberDtoResponse 반환
    fun toDto(): MemberDtoResponse =
        MemberDtoResponse(id!!, name, loginId, nickname, job, address, email, birthDate?.formatDate())
}

//권한 릴레이션
@Entity
class MemberRole(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long? = null,

    //권한
    @Column(nullable = false, length = 30)
    @Enumerated(EnumType.STRING)
    val role: ROLE,

    //member table에 연결(many - one으로 연결)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(foreignKey = ForeignKey(name = "fk_member_role_member_id"))
    val member: Member,
)

//단어 릴레이션
@Entity
@Table(name = "word")
class Word(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long? = null,

    @Column(nullable = false, length = 50)
    val word: String,

    @Column(nullable = false, length = 255)
    val meaning: String,

    @Column(nullable = true, length = 255)
    var altMeaning1: String? = null,

    @Column(nullable = true, length = 255)
    var altMeaning2: String? = null,

    @Column(nullable = true, length = 255)
    var altMeaning3: String? = null,

    @Column(nullable = true, length = 255)
    var altMeaning4: String? = null,

    @Column(nullable = true, length = 255)
    var altMeaning5: String? = null,

    @Column(nullable = true, length = 255)
    var altMeaning6: String? = null
)