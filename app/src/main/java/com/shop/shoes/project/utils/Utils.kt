package com.shop.shoes.project.utils

import com.google.gson.Gson
import com.shop.shoes.project.data.model.Product

object Utils {

    fun convertProductToJson(product: Product): String {
        val gson = Gson()
        return gson.toJson(product)
    }

    fun convertJsonToProduct(json: String): Product {
        val gson = Gson()
        return gson.fromJson(json, Product::class.java)
    }

}