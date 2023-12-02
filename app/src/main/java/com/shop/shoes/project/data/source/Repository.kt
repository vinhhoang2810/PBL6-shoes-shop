package com.shop.shoes.project.data.source

import com.shop.shoes.project.data.model.Auth
import com.shop.shoes.project.data.model.AuthResponse
import com.shop.shoes.project.data.model.User
import com.shop.shoes.project.data.source.local.LocalDataSourceImpl
import com.shop.shoes.project.data.source.local.LocalDataSource
import com.shop.shoes.project.data.source.remote.RemoteDataSource
import com.shop.shoes.project.data.source.remote.RemoteDataSourceImpl

class Repository(
    private val localDataSource: LocalDataSourceImpl,
    private val remoteDataSource: RemoteDataSourceImpl
) : RemoteDataSource, LocalDataSource {
    override suspend fun signIn(request: Auth): AuthResponse {
        return remoteDataSource.signIn(request)
    }

    override suspend fun getInfo(): User {
        return remoteDataSource.getInfo()
    }

}