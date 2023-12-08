package com.shop.shoes.project.ui.main.cart

import android.app.Application
import android.util.Log
import android.widget.Toast
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.shop.shoes.project.R
import com.shop.shoes.project.data.model.BodyCart
import com.shop.shoes.project.data.model.Cart
import com.shop.shoes.project.data.model.User
import com.shop.shoes.project.data.source.Repository
import com.shop.shoes.project.utils.Pref.context
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

    fun addNewCart(cart: BodyCart, listener: () -> Unit) {
        viewModelScope.launch {
            try {
                val response = repository.addNewCart(cart)
                if (response.status) {
                    Toast.makeText(
                        context,
                        context.getString(R.string.item_add_to_cart),
                        Toast.LENGTH_SHORT
                    ).show()
                    listener.invoke()
                } else {
                    Toast.makeText(
                        context,
                        context.getString(R.string.add_cart_fail),
                        Toast.LENGTH_SHORT
                    ).show()
                }
            } catch (e: Exception) {
                Toast.makeText(
                    context,
                    context.getString(R.string.add_cart_fail),
                    Toast.LENGTH_SHORT
                ).show()
            }
        }
    }
}