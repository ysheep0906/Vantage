package com.englishTest.vantage.user.service

import com.englishTest.vantage.common.exception.InvalidInputException
import com.englishTest.vantage.user.dto.UserDtoRequest
import com.englishTest.vantage.user.entitiy.User
import com.englishTest.vantage.user.repository.UserRepository
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service


@Transactional
@Service
class UserService(
    private val userRepository: UserRepository //UserRepository Interface를 상속받아 생성
){
    /*
    회원가입
    */
    fun signUp(userDtoRequest: UserDtoRequest): String{
        //ID 중복 검사
        var user: User? = userRepository.findByusername(userDtoRequest.username)
        if(user != null){ //존재하면 중지
            throw InvalidInputException("username", "이미 등록된 ID 입니다.")
        }

        user = userDtoRequest.toEntity()

        userRepository.save(user) //insert

        return "회원가입"
    }
}
