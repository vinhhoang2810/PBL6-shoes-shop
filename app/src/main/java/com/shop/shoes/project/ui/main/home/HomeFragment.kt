package com.shop.shoes.project.ui.main.home

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import com.shop.shoes.project.R
import com.shop.shoes.project.data.model.Product
import com.shop.shoes.project.databinding.FragmentHomeBinding
import com.shop.shoes.project.ui.main.base.BaseFragment
import com.shop.shoes.project.ui.main.home.adapter.BrandAdapter
import com.shop.shoes.project.ui.main.home.adapter.ProductAdapter
import com.shop.shoes.project.utils.BrandUtils
import org.koin.android.ext.android.inject

class HomeFragment : BaseFragment<FragmentHomeBinding>() {

    private val homeViewModel by inject<HomeViewModel>()
    private val products = mutableListOf<Product>()
    private val brands = BrandUtils.brands
    private val poster = arrayListOf(
        R.drawable.img_banner,
        R.drawable.img_banner_1,
        R.drawable.img_banner_2
    )
    private val adapter by lazy(LazyThreadSafetyMode.NONE) {
        ProductAdapter(products) { pos ->
            //TODO
        }
    }
    private val brandAdapter by lazy(LazyThreadSafetyMode.NONE) {
        BrandAdapter(brands) { pos ->
            //TODO
        }
    }
    private val viewPagerAdapter by lazy { PosterViewPagerAdapter(poster) }

    override fun initView() = binding.run {
        rvProducts.layoutManager = GridLayoutManager(context, 2)
        rvBrand.run {
            layoutManager = LinearLayoutManager(context, LinearLayoutManager.HORIZONTAL, false)
            adapter = brandAdapter
        }
        viewPager.adapter = viewPagerAdapter
        dotIndicator.setViewPager(viewPager)
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