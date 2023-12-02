package com.shop.shoes.project.data.source.remote

import com.shop.shoes.project.data.model.Auth
import com.shop.shoes.project.data.model.AuthResponse
import com.shop.shoes.project.data.model.User
import retrofit2.http.Body

interface RemoteDataSource {
    suspend fun signIn(@Body request: Auth) : AuthResponse
    suspend fun getInfo() : User
    suspend fun signUp(@Body request: User) : AuthResponse
}
