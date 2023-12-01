package com.shop.shoes.project.ui.main.account

import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import com.shop.shoes.project.databinding.FragmentAccountBinding
import com.shop.shoes.project.ui.auth.LoginActivity
import com.shop.shoes.project.ui.main.base.BaseFragment

class AccountFragment : BaseFragment<FragmentAccountBinding>(){
    override fun initView() {
    }

    override fun initData() {
    }

    override fun initListener() {
        binding.tvLogin.setOnClickListener{
            startActivity(Intent(context, LoginActivity::class.java))
        }
    }

    override fun getViewBinding(
        inflater: LayoutInflater,
        container: ViewGroup?
    ): FragmentAccountBinding = FragmentAccountBinding.inflate(inflater)

}