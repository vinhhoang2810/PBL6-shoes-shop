package com.shop.shoes.project.data.network

import com.shop.shoes.project.data.model.Auth
import com.shop.shoes.project.data.model.AuthResponse
import com.shop.shoes.project.data.model.BodyCart
import com.shop.shoes.project.data.model.ResponseCart
import com.shop.shoes.project.data.model.ResponseCartAdd
import com.shop.shoes.project.data.model.ResponseProduct
import com.shop.shoes.project.data.model.User
import com.shop.shoes.project.utils.Constants
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.PUT

interface ApiService {
    @POST(Constants.SIGN_IN)
    suspend fun signIn(@Body request: Auth): AuthResponse

    @POST(Constants.SIGN_UP)
    suspend fun signUp(@Body request: User): AuthResponse

    @GET(Constants.GET_INFO)
    suspend fun getInfo(): User

    @GET(Constants.GET_ALL_PRODUCTS)
    suspend fun getAllProducts(): ResponseProduct

    @GET(Constants.GET_ALL_CART)
    suspend fun getAllCarts(): ResponseCart

    @PUT(Constants.ADD_CART)
    suspend fun addNewCart(@Body body: BodyCart): ResponseCartAdd
}
