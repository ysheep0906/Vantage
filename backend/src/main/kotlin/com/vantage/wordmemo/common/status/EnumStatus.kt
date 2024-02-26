package com.vantage.wordmemo.common.status

/* gender 사용 여부 미정
enum class Gender(val desc: String) {
    MAN("남"),
    WOMAN("여")
}
*/

enum class ResultCode(val msg: String) {
    SUCCESS("정상 처리 되었습니다."),
    ERROR("에러가 발생했습니다.")
}

//권한
enum class ROLE {
    MEMBER
}