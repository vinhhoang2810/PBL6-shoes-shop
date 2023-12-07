package com.shop.shoes.project.ui.main.home

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.shop.shoes.project.data.model.Product
import com.shop.shoes.project.data.source.Repository
import kotlinx.coroutines.launch

class HomeViewModel(application: Application, private val repository: Repository) :
    AndroidViewModel(application) {
    private val _product = MutableLiveData<List<Product>>(emptyList())
    val product = _product
    fun getAllProducts() {
        viewModelScope.launch {
            try {
                val response = repository.getAllProducts()
                _product.postValue(response.content)
            } catch (e: Exception) {
                _product.postValue(emptyList())
            }
        }
    }
}