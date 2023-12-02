package com.shop.shoes.project.ui.main.account

import android.app.Application
import android.widget.Toast
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.shop.shoes.project.R
import com.shop.shoes.project.data.model.User
import com.shop.shoes.project.data.source.Repository
import com.shop.shoes.project.utils.Pref.context
import kotlinx.coroutines.launch

class InfoViewModel(application: Application, private val repository: Repository) :  AndroidViewModel(application){
    private val _user = MutableLiveData<User?>(null)
    val user = _user
    fun getInfo(){
        viewModelScope.launch {
            try {
                val response = repository.getInfo()
                _user.postValue(response)
            }catch (e: Exception){
                _user.postValue(null)
                Toast.makeText(context, context.getString(R.string.get_info_fail), Toast.LENGTH_LONG).show()
            }
        }
    }

}