package com.shop.shoes.project.ui.login

import android.app.Application
import android.widget.Toast
import androidx.lifecycle.AndroidViewModel
import com.shop.shoes.project.R
import com.shop.shoes.project.data.model.Auth
import com.shop.shoes.project.data.model.AuthResponse
import com.shop.shoes.project.data.source.Repository
import com.shop.shoes.project.utils.Pref
import com.shop.shoes.project.utils.Pref.context
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class LoginViewModel(application: Application, private val repository: Repository) :  AndroidViewModel(application){
    fun signIn(auth: Auth, listener: () -> Unit){
        repository.signIn(auth).enqueue(object : Callback<AuthResponse> {
            override fun onResponse(call: Call<AuthResponse>, response: Response<AuthResponse>) {
                if (response.isSuccessful) {
                    val registerResponse = response.body()
                    if(registerResponse!!.jwt != null ){
                        Toast.makeText(context, context.getString(R.string.sign_in_success), Toast.LENGTH_LONG).show()
                        Pref.accessToken = registerResponse.jwt.toString()
                        Pref.userName = auth.username
                        listener.invoke()
                    }else{
                        Toast.makeText(context, context.getString(R.string.account_or_password_is_incorrect), Toast.LENGTH_LONG).show()
                    }
                } else {
                    val errorResponse: AuthResponse? = response.body()
                    val errorMessage = errorResponse?.message ?: context.getString(R.string.unknow_error)
                    Toast.makeText(context, context.getString(R.string.sign_in_fail) + ": $errorMessage", Toast.LENGTH_LONG).show()
                }
            }

            override fun onFailure(call: Call<AuthResponse>, t: Throwable) {
                Toast.makeText(context, context.getString(R.string.sign_in_fail), Toast.LENGTH_LONG).show()
            }
        })
    }


}