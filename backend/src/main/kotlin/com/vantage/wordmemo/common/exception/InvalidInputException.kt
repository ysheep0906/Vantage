package com.vantage.wordmemo.common.exception

//DB확인 후 발생하는 Exception처리를 위한 class
class InvalidInputException(
    val fieldName: String = "",
    message: String = "Invalid Input"
) : RuntimeException(message)