package com.vantage.wordmemo.common.dto

import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.User

//User class를 상속받아 생성 <- 기존 User에 userId와 token을 저장할 수 있는 class
//이렇게 하는 이유는 자신 말고 다른 userId의 url에 접근하는 것을 방지하기 위함
class CustomUser(
    val userId: Long,
    userName: String,
    password: String,
    authorities: Collection<GrantedAuthority>
) : User(userName, password, authorities)