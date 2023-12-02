package com.shop.shoes.project.data.network

import com.shop.shoes.project.data.model.Auth
import com.shop.shoes.project.data.model.AuthResponse
import com.shop.shoes.project.data.model.User
import com.shop.shoes.project.utils.Constants
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST

interface ApiService {
    @POST(Constants.SIGN_IN)
    suspend fun signIn(@Body request: Auth) : AuthResponse

    @POST(Constants.SIGN_UP)
    suspend fun signUp(@Body request: User) : AuthResponse

    @GET(Constants.GET_INFO)
    suspend fun getInfo() : User
}
