package com.vantage.wordmemo.member.dto

import com.fasterxml.jackson.annotation.JsonProperty
import com.vantage.wordmemo.member.entity.Member
import jakarta.validation.constraints.Email
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.Pattern
import java.time.LocalDate
import java.time.format.DateTimeFormatter

//회원 정보 관련 dto
data class MemberDtoRequest(
    var id: Long?,

    @field:NotBlank
    @JsonProperty("name")
    private val _name: String?,

    @field:NotBlank
    @JsonProperty("loginId")
    private val _loginId: String?,

    @field:NotBlank
    /* 조건은 프론트에서 검사
    @field:Pattern(
        regexp = "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%^&*])[a-zA-Z0-9!@#\$%^&*]{8,20}\$",
        message = "영문, 숫자, 특수문자를 포함한 8~20자리로 입력해주세요"
    )*/
    @JsonProperty("password")
    private val _password: String?,

    @JsonProperty("nickname")
    private val _nickname: String?,

    @field:Email
    @JsonProperty("email")
    private val _email: String?,

    @JsonProperty("job")
    private val _job: String?,

    @JsonProperty("address")
    private val _address: String?,


    @field:Pattern(
        regexp = "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$",
        message = "날짜형식(YYYY-MM-DD)을 확인해주세요"
    )
    @JsonProperty("birthDate")
    private val _birthDate: String?,

    /* 사용 여부 미정
    @field:NotBlank
    @field:ValidEnum(enumClass = Gender::class, message = "MAN 이나 WOMAN 중 하나를 선택해주세요.")
    @JsonProperty("gender")
    private val _gender: String?,

    */
){
    val name: String
        get() = _name!!
    val loginId: String
        get() = _loginId!!
    val password: String
        get() = _password!!
    val nickname: String?
        get() = _nickname
    val email: String?
        get() = _email
    val job: String?
        get() = _job
    val address: String?
        get() = _address
    val birthDate: LocalDate?
        get() = _birthDate?.toLocalDate()
    /*사용 여부 미정
    val gender: Gender
        get() = Gender.valueof(_gender!!)
    */

    //String this를 받아 LocalDate로 변환하는 함수
    private fun String.toLocalDate(): LocalDate =
        LocalDate.parse(this, DateTimeFormatter.ofPattern("yyyy-MM-dd"))

    //entity로 변환해서 반환하는 함수
    fun toEntity(): Member =
        Member(id, name, loginId, password, nickname, email, job, address, birthDate)
}

//login을 위한 Dto
data class LoginDto(
    @field:NotBlank
    @JsonProperty("loginId")
    private val _loginId: String?,

    @field:NotBlank
    @JsonProperty("password")
    private val _password: String?,
) {
    val loginId: String
        get() = _loginId!!
    val password: String
        get() = _password!!
}

//회원 조회를 위한 DTO
data class MemberDtoResponse(
    val id: Long,
    val name: String,
    val loginId: String,
    val nickname: String?,
    val job: String?,
    val address: String?,
    val email: String?,
    val birthDate: String?,
    //val gender: String,

)