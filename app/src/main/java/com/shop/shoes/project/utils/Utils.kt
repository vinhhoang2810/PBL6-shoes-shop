package com.shop.shoes.project.utils

import com.google.gson.Gson
import com.shop.shoes.project.data.model.Product
import java.text.SimpleDateFormat
import java.util.Locale

object Utils {

    fun convertProductToJson(product: Product): String {
        val gson = Gson()
        return gson.toJson(product)
    }

    fun convertJsonToProduct(json: String): Product {
        val gson = Gson()
        return gson.fromJson(json, Product::class.java)
    }

    fun convertDateFormat(inputDate: String): String {
        val inputFormat = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSSSS", Locale.getDefault())
        val outputFormat = SimpleDateFormat("yyyy-MM-dd", Locale.getDefault())
        val date = inputFormat.parse(inputDate)
        return if (date != null) {
            outputFormat.format(date)
        } else {
            inputDate
        }
    }
}