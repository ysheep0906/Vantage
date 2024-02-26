package com.vantage.wordmemo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class WordmemoApplication

fun main(args: Array<String>) {
	runApplication<WordmemoApplication>(*args)
}
