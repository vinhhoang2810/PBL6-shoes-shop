package com.shop.shoes.project.ui.main.home

import android.view.LayoutInflater
import android.view.ViewGroup
import com.shop.shoes.project.databinding.FragmentHomeBinding
import com.shop.shoes.project.ui.main.base.BaseFragment

class HomeFragment : BaseFragment<FragmentHomeBinding>() {
    override fun initView() {
    }

    override fun initData() {
    }

    override fun initListener() {
    }

    override fun getViewBinding(
        inflater: LayoutInflater,
        container: ViewGroup?
    ): FragmentHomeBinding = FragmentHomeBinding.inflate(inflater)

}