package com.englishTest.vantage.common.dto

import com.englishTest.vantage.common.status.ResultCode


data class BaseResponse<T>(
    val resultCode: String = ResultCode.SUCCESS.name, //결과
    val data: T? = null,
    val message: String = ResultCode.SUCCESS.msg, //결과에 해당하는 message
)