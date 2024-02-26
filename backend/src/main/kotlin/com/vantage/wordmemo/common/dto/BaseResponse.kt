package com.vantage.wordmemo.common.dto

import com.vantage.wordmemo.common.status.ResultCode

//request에 대한 결과를 모두 이 BaseResponse에 담아서 전달할 것
data class BaseResponse<T>(
    //결과 코드
    val resultCode: String = ResultCode.SUCCESS.name,
    //처리한 결과를 반환
    val data: T? = null,
    //결과코드에 해당하는 메시지
    val message: String = ResultCode.SUCCESS.msg,
)