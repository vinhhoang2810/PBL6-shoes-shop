package com.shop.shoes.project.data.source.remote

import com.shop.shoes.project.data.model.Auth
import com.shop.shoes.project.data.model.AuthResponse
import com.shop.shoes.project.data.network.ApiService
import retrofit2.Call

class RemoteDataSourceImpl(
    private val apiService: ApiService
) : RemoteDataSource {
    override fun signIn(request: Auth): Call<AuthResponse> {
        return apiService.signIn(request)
    }

}