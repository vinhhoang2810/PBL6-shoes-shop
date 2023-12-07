package com.shop.shoes.project.ui.main.home

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.GridLayoutManager
import com.shop.shoes.project.data.model.Product
import com.shop.shoes.project.databinding.FragmentHomeBinding
import com.shop.shoes.project.ui.main.base.BaseFragment
import org.koin.android.ext.android.inject


class HomeFragment : BaseFragment<FragmentHomeBinding>() {

    private val homeViewModel by inject<HomeViewModel>()
    private val products = mutableListOf<Product>()
    private val adapter by lazy(LazyThreadSafetyMode.NONE) {
        ProductAdapter(products) { pos ->
            //TODO
        }
    }


    override fun initView() {
        binding.rvProducts.layoutManager = GridLayoutManager(context, 2);
    }

    override fun initData() {
        homeViewModel.getAllProducts()
        listenVM()
    }

    override fun initListener() {
    }

    override fun getViewBinding(
        inflater: LayoutInflater,
        container: ViewGroup?
    ): FragmentHomeBinding = FragmentHomeBinding.inflate(inflater)

    @SuppressLint("NotifyDataSetChanged")
    private fun listenVM() {
        homeViewModel.product.observe(this) {
            products.run {
                clear()
                addAll(it)
            }
            adapter.notifyDataSetChanged()
            binding.rvProducts.adapter = adapter
        }
    }
}