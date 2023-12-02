package com.shop.shoes.project.ui.main.account

import android.view.LayoutInflater
import android.view.ViewGroup
import com.airbnb.lottie.LottieDrawable
import com.shop.shoes.project.databinding.FragmentAccountBinding
import com.shop.shoes.project.ui.main.base.BaseFragment

class AccountFragment : BaseFragment<FragmentAccountBinding>(){
    override fun initView() {
        playAnimation()
    }

    override fun initData() {
    }

    override fun initListener() {
    }

    override fun getViewBinding(
        inflater: LayoutInflater,
        container: ViewGroup?
    ): FragmentAccountBinding = FragmentAccountBinding.inflate(inflater)

    private fun playAnimation() {
        binding.animationView.run {
            playAnimation()
            repeatCount = LottieDrawable.INFINITE
        }
    }

}