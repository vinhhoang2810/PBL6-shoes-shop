package com.shop.shoes.project.ui.main.cart

import android.view.LayoutInflater
import android.view.ViewGroup
import com.shop.shoes.project.databinding.FragmentCartBinding
import com.shop.shoes.project.ui.main.base.BaseFragment
import org.koin.android.ext.android.inject

class CartFragment : BaseFragment<FragmentCartBinding>() {

    private val cartViewModel by inject<CartViewModel>()
    override fun initView() {
    }

    override fun initData() {
        cartViewModel.getAllCart()
    }

    override fun initListener() {
    }

    override fun getViewBinding(
        inflater: LayoutInflater,
        container: ViewGroup?
    ): FragmentCartBinding = FragmentCartBinding.inflate(inflater)
}