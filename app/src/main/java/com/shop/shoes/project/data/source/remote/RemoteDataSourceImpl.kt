package com.shop.shoes.project.data.source.remote

import com.shop.shoes.project.data.network.ApiService

class RemoteDataSourceImpl(
    private val apiService: ApiService
) : RemoteDataSource {
}