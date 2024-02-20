package com.englishTest.vantage.user.controller

import com.englishTest.vantage.common.dto.BaseResponse
import com.englishTest.vantage.user.dto.UserDtoRequest
import com.englishTest.vantage.user.service.UserService
import jakarta.validation.Valid
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RequestMapping("/user")
@RestController
class UserController (
    private val userService: UserService
){
    /*
    회원가입
     */
    @PostMapping("/signup")
    fun signUp(@RequestBody @Valid userDtoRequest: UserDtoRequest): BaseResponse<Unit> {
        val resultMsg: String = userService.signUp(userDtoRequest)
        return BaseResponse(message = resultMsg)
    }
}

