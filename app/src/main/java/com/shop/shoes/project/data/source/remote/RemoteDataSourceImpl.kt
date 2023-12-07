package com.shop.shoes.project.data.source.remote

import com.shop.shoes.project.data.model.Auth
import com.shop.shoes.project.data.model.AuthResponse
import com.shop.shoes.project.data.model.ResponseProduct
import com.shop.shoes.project.data.model.User
import com.shop.shoes.project.data.network.ApiService

class RemoteDataSourceImpl(
    private val apiService: ApiService
) : RemoteDataSource {
    override suspend fun signIn(request: Auth): AuthResponse {
        return apiService.signIn(request)
    }

    override suspend fun getInfo(): User {
        return apiService.getInfo()
    }

    override suspend fun signUp(request: User): AuthResponse {
        return apiService.signUp(request)
    }

    override suspend fun getAllProducts(): ResponseProduct {
        return apiService.getAllProducts()
    }

}