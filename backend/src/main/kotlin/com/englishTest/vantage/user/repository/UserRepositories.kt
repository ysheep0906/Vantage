package com.englishTest.vantage.user.repository

import com.englishTest.vantage.user.entitiy.User
import org.springframework.data.jpa.repository.JpaRepository


//interface로 생성, JpaRepository를 상속받아 생성 => 실제 구현은 service package에서 담당
interface UserRepository : JpaRepository<User, Long>{
    fun findByusername(username: String) : User?
}
