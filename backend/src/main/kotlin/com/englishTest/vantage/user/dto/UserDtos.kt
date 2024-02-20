package com.englishTest.vantage.user.dto

import com.englishTest.vantage.user.entitiy.User
import com.fasterxml.jackson.annotation.JsonProperty
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.Pattern

data class UserDtoRequest(
    val id: Long?,

    @field:NotBlank //빈칸 금지
    @JsonProperty("username") //연결
    private val _username: String?,

    @field:NotBlank
    /*
    @field:Pattern( //비밀번호 조건 설정
        regexp = "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%^&*])[a-zA-Z0-9!@#\$%^&*]{8,20}\$",
        message = "영문, 숫자, 특수문자를 포함한 8~20자리로 입력해주세요"
    )
    */
    @JsonProperty("password")
    private val _password: String?,

    @field:NotBlank
    @JsonProperty("name")
    private val _name: String?,
) {
    val username: String
        get() = _username!!
    val password: String
        get() = _password!!
    val name: String
        get() = _name!!

    //entity로 변환해서 반환하는 함수
    fun toEntity(): User =
        User(id, username, password, name)
}