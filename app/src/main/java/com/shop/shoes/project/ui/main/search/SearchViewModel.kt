package com.shop.shoes.project.ui.main.search

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.shop.shoes.project.data.model.Product
import com.shop.shoes.project.data.source.Repository
import kotlinx.coroutines.launch

class SearchViewModel(application: Application, private val repository: Repository) :
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

    fun search(name: String): List<Product> {
        val list = mutableListOf<Product>()
        _product.value?.forEach {
            if (it.title.toLowerCase().contains(name.toLowerCase())) {
                list.add(it)
            }
        }
        return list
    }
}