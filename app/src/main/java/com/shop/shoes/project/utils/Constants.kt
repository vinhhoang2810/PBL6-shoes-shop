package com.shop.shoes.project.utils

object Constants {
    const val MAIN_NUMBER_FRAGMENT: Int = 3
    const val MAIN_HOME: Int = 0
    const val MAIN_CART: Int = 1
    const val MAIN_ACCOUNT: Int = 2
    const val SERVER: String = "https://pbl6-shoes-shop-production-9e98.up.railway.app"
    const val DATABASE_NAME = "saved.db"
    const val TIME_OUT = 60_000L
    const val SIGN_IN = "/auth/signin"
    const val GET_INFO = "/api/users/profile"
    const val GET_ALL_PRODUCTS =
        "/api/products/?color=&size=&minPrice=0&maxPrice=10000000&minDiscount=0&brand=&stock=null&sort=price_low&pageNumber=0&pageSize=10"
    const val REQUEST_CODE_LOGIN = 123
    const val ROLE = "USER"
    const val SIGN_UP = "/auth/signup"
}