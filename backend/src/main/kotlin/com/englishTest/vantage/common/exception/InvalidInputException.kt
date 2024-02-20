package com.englishTest.vantage.common.exception

//DB에서 값을 한 번 확인 후 확인한 Exception에 대해 동작

class InvalidInputException(
    val fieldName: String = "",
    message: String = "Invalid Input"
) : RuntimeException(message) //RuntimeException을 상속받음