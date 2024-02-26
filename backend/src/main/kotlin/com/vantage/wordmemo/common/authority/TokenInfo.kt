package com.vantage.wordmemo.common.authority

//token의 정보를 담음
data class TokenInfo(
    //jwt권한 인증 타입
    val grantType: String,
    //실제 검증할 token
    val accessToken: String,
    //보통은 refresh token까지 사용 <- 추후 추가
)