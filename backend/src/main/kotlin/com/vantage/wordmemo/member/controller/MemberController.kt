package com.vantage.wordmemo.member.controller

import com.vantage.wordmemo.common.authority.TokenInfo
import com.vantage.wordmemo.common.dto.BaseResponse
import com.vantage.wordmemo.member.dto.LoginDto
import com.vantage.wordmemo.member.dto.MemberDtoRequest
import com.vantage.wordmemo.member.service.MemberService
import jakarta.validation.Valid
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

//endpoint -> 실제 logic은 service class에서 담당
@RequestMapping("/user")
@RestController
class MemberController(
    private val memberService: MemberService
) {
    /**
     * 회원가입
     */
    @PostMapping("/signup")
    fun signUp(@RequestBody @Valid memberDtoRequest: MemberDtoRequest): BaseResponse<Unit>{
        val resultMsg: String = memberService.signUp(memberDtoRequest)
            return BaseResponse(message = resultMsg)
    }

    /**
     * 로그인
     */
    @PostMapping("/signin")
    fun login(@RequestBody @Valid loginDto: LoginDto): BaseResponse<TokenInfo> {
        val tokenInfo = memberService.login(loginDto)
        return BaseResponse(data = tokenInfo)
    }

}