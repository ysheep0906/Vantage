package com.vantage.wordmemo.common.annotation

import jakarta.validation.Constraint
import jakarta.validation.ConstraintValidator
import jakarta.validation.ConstraintValidatorContext
import jakarta.validation.Payload
import kotlin.reflect.KClass

@Target(AnnotationTarget.FIELD)
@Retention(AnnotationRetention.RUNTIME)
@MustBeDocumented
@Constraint(validatedBy = [ValidEnumValidator::class])
//validation을 체크하는 class
annotation class ValidEnum(
    val message: String = "Invalid enum value",
    val groups: Array<KClass<*>> = [],
    val payload: Array<KClass<out Payload>> = [],
    val enumClass: KClass<out Enum<*>>
)

//enum class를 check하기 위한 class
class ValidEnumValidator : ConstraintValidator<ValidEnum, Any> {
    private lateinit var enumValues: Array<out Enum<*>>

    override fun initialize(annotation: ValidEnum) {
        enumValues = annotation.enumClass.java.enumConstants
    }

    //실제 check하는 부분
    override fun isValid(value: Any?, context: ConstraintValidatorContext): Boolean {
        //사용자가 입력한 값이 value
        if (value == null) {
            return true
        }
        //value가 enumValues내에 존재하는 값이면 true 아니면 flase
        return enumValues.any { it.name == value.toString()}
    }
}