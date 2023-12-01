package com.shop.shoes.project.ui.auth

import android.view.LayoutInflater
import com.shop.shoes.project.databinding.ActivityRegisterBinding
import com.shop.shoes.project.ui.main.base.BaseActivity

class RegisterActivity : BaseActivity<ActivityRegisterBinding>(){
    override fun viewBinding(inflate: LayoutInflater): ActivityRegisterBinding = ActivityRegisterBinding.inflate(inflate)

    override fun initView() {
    }

    override fun initData() {
    }

    override fun initListener() =binding.run {
        llLogin.setOnClickListener { finish() }
    }
}