package com.vantage.wordmemo.common.authority

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.factory.PasswordEncoderFactories
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter

@Configuration
@EnableWebSecurity
class SecurityConfig(
    private val jwtTokenProvider: JwtTokenProvider
) {
    //http security를 받아서 SecurityFilterChain을 반환
    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .httpBasic { it.disable() }
            .csrf { it.disable() }
            .sessionManagement { it.sessionCreationPolicy(SessionCreationPolicy.STATELESS) } //JWT를 사용하기에 session은 미사용
            //실제 권한관리는 아래에 있는 내용 -> 추가되는 url에 권환 설정이 필요하면 아래에 내용 추가
            .authorizeHttpRequests {
                it.requestMatchers("/user/idcheck", "/user/signup", "/user/signin").anonymous() //이 url을 호출하는 사람은 인증되지 않은 사용자여야 함
                    .requestMatchers("/user/**").hasRole("MEMBER") //이외의 user url 접근은 모두 Member 권한이 존재하는 경우 접근 가능
                    .anyRequest().permitAll() //그 이외의 request는 아무 권한 없이 모두가 요청 가능
            }
            .addFilterBefore( //filter 옵션설정, filter가 앞 부터 순서대로 check하고, 중간에 걸리게 되면 뒤에 있는 filter는 check하지 않음
                JwtAuthenticationFilter(jwtTokenProvider),
                UsernamePasswordAuthenticationFilter::class.java
            )

        return http.build()
    }

    //password 암호화 함수
    @Bean
    fun passwordEncoder(): PasswordEncoder =
        PasswordEncoderFactories.createDelegatingPasswordEncoder()
}