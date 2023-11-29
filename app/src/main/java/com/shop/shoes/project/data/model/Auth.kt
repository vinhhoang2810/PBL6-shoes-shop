package com.shop.shoes.project.data.model

import com.google.gson.annotations.SerializedName

data class Auth(
    @SerializedName("email")
    var username: String,
    @SerializedName("password")
    var password: String,
)

data class AuthResponse(
    val jwt: String? = null,
    val message: String? = null
)