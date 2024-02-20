package com.englishTest.vantage.user.entitiy

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table
import jakarta.persistence.UniqueConstraint

//회원관리를 위한 User Entity
@Entity
@Table(
    uniqueConstraints = [UniqueConstraint(name = "uk_user_user_name", columnNames = ["username"])] //username 중복이 불가능한 unique key
)
class User(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) //id가 key값이 될 것
    var id: Long? = null,

    //nullable은 null 가능 여부, updatable은 수정 가능 여부
    @Column(nullable = false, length =  30, updatable = false)
    val username: String,

    @Column(nullable = false, length =  100)
    val password: String,

    @Column(nullable = false, length =  10)
    val name: String,
)