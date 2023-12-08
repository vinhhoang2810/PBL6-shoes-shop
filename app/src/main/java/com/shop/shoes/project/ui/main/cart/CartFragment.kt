package com.shop.shoes.project.ui.main.cart

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import com.shop.shoes.project.data.model.Cart
import com.shop.shoes.project.databinding.FragmentCartBinding
import com.shop.shoes.project.ui.main.base.BaseFragment
import org.koin.android.ext.android.inject

class CartFragment : BaseFragment<FragmentCartBinding>() {

    private val carts = mutableListOf<Cart>()

    private val cartViewModel by inject<CartViewModel>()
    private val adapter by lazy(LazyThreadSafetyMode.NONE) {
        CartAdapter(carts) { pos ->
            //TODO
        }
    }

    override fun initView() {
        binding.rvCart.layoutManager = LinearLayoutManager(context)
    }

    override fun initData() {
        cartViewModel.getAllCart()
        listenCart()
    }

    override fun initListener() {
    }

    override fun getViewBinding(
        inflater: LayoutInflater,
        container: ViewGroup?
    ): FragmentCartBinding = FragmentCartBinding.inflate(inflater)

    @SuppressLint("NotifyDataSetChanged")
    private fun listenCart() {
        cartViewModel.cart.observe(this) {
            carts.run {
                clear()
                addAll(it)
            }
            adapter.notifyDataSetChanged()
            binding.rvCart.adapter = adapter
        }
    }
}