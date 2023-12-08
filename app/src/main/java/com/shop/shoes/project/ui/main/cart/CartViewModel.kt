package com.shop.shoes.project.ui.main.cart

import android.app.Application
import android.util.Log
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.shop.shoes.project.data.model.Cart
import com.shop.shoes.project.data.source.Repository
import kotlinx.coroutines.launch

class CartViewModel(application: Application, private val repository: Repository) :
    AndroidViewModel(application) {
    private val _cart = MutableLiveData<List<Cart>>(emptyList())
    val cart = _cart
    fun getAllCart() {
        viewModelScope.launch {
            try {
                val response = repository.getAllCarts()
                _cart.postValue(response.cartItems)
                Log.d("VANVAN", "$response")
            } catch (e: Exception) {
                _cart.postValue(emptyList())
                Log.d("VANVAN", "Fail: $e")
            }
        }
    }
}