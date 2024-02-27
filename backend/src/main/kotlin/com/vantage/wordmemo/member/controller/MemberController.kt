package com.vantage.wordmemo.member.controller

import com.vantage.wordmemo.common.authority.TokenInfo
import com.vantage.wordmemo.common.dto.BaseResponse
import com.vantage.wordmemo.common.dto.CustomUser
import com.vantage.wordmemo.member.dto.LoginDto
import com.vantage.wordmemo.member.dto.MemberDtoRequest
import com.vantage.wordmemo.member.dto.MemberDtoResponse
import com.vantage.wordmemo.member.service.MemberService
import jakarta.validation.Valid
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.*

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

    /**
     * 내 정보 보기
     */
    ///info/{id}와 같은 형식으로 하면 다른 사람이 id를 아는 것 만으로 해당 사람의 정보를 모두 추출 가능 => 이런식으로 token에 userid정보를 담아 자신의 정보만 조회 가능하도록 구현
    @GetMapping("/info")
    fun searchMyInfo(): BaseResponse<MemberDtoResponse> {
        //SecurityContextHolder에서 token 정보를 뽑아와 token의 claim에 있는 userId를 가져옴 <- 자신이 로그인한 userId를 추출 가능
        val userId = (SecurityContextHolder.getContext().authentication.principal as CustomUser).userId
        //searchMyInfo 호출 시 자신의 userId를 이용해 호출
        val response = memberService.searchMyInfo(userId)
        return BaseResponse(data = response)
    }

    /**
     * 내 정보 저장
     */
    @PutMapping("/info")
    fun saveMyInfo(@RequestBody @Valid memberDtoRequest: MemberDtoRequest): BaseResponse<Unit> {
        val userId = (SecurityContextHolder.getContext().authentication.principal as CustomUser).userId
        memberDtoRequest.id = userId
        val resultMsg: String = memberService.saveMyInfo(memberDtoRequest)
        return BaseResponse(message = resultMsg)
    }

}