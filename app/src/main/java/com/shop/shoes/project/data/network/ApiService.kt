package com.shop.shoes.project.data.network

import com.shop.shoes.project.data.model.Auth
import com.shop.shoes.project.data.model.AuthResponse
import com.shop.shoes.project.utils.Constants
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST

interface ApiService {
    @POST(Constants.SIGN_IN)
    fun signIn(@Body request: Auth) : Call<AuthResponse>
}
