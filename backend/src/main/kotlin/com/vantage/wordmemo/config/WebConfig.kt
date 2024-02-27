package com.vantage.wordmemo.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class WebConfig : WebMvcConfigurer {

    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**") // 모든 경로에 대해
            .allowedOrigins("http://localhost:3000") // 특정 출처 허용
            .allowedMethods("GET", "POST", "PUT", "DELETE") // 허용할 HTTP 메소드 지정
            .allowCredentials(true) // 쿠키/인증 정보 포함 여부
            .maxAge(3600) // pre-flight request의 결과를 캐싱하는 시간(초 단위)
    }

    // 필요에 따라 더 세밀한 설정을 추가할 수 있음
}