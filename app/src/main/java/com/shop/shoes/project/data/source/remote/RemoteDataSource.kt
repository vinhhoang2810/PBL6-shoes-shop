package com.shop.shoes.project.data.source.remote

import com.shop.shoes.project.data.model.Auth
import com.shop.shoes.project.data.model.AuthResponse
import com.shop.shoes.project.data.model.User
import retrofit2.Call
import retrofit2.http.Body

interface RemoteDataSource {
    fun signIn(@Body request: Auth) : Call<AuthResponse>
    suspend fun getInfo() : User
}
