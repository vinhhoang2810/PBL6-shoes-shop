package com.shop.shoes.project.ui.auth

import android.view.LayoutInflater
import android.widget.Toast
import com.shop.shoes.project.R
import com.shop.shoes.project.data.model.Auth
import com.shop.shoes.project.databinding.ActivityLoginBinding
import com.shop.shoes.project.ui.main.base.BaseActivity
import org.koin.android.ext.android.inject

class LoginActivity : BaseActivity<ActivityLoginBinding>(){
    private val viewModel by inject<LoginViewModel>()
    override fun viewBinding(inflate: LayoutInflater): ActivityLoginBinding = ActivityLoginBinding.inflate(inflate)

    override fun initView() {
        binding.run {
            btnLogin.setOnClickListener { handleSignIn() }
        }
    }

    override fun initData() {
    }

    override fun initListener() {
    }

    private fun handleSignIn() {
        if(checkIsSignIn()){
            viewModel.signIn(createAuth()) {finish()}
        }else{
            Toast.makeText(this, getString(R.string.please_enter_enough_information), Toast.LENGTH_LONG).show()
        }
    }

    private fun createAuth() : Auth {
        binding.run {
            return Auth(username =  edtEmail.text.toString(),
                password = edtPassword.text.toString())
        }
    }

    private fun checkIsSignIn() : Boolean {
        binding.run {
            if(edtEmail.text.toString() == "" || edtPassword.text.toString() == ""){
                return false
            }
            return true
        }
    }
}