package com.shop.shoes.project.ui.main.cart

import android.annotation.SuppressLint
import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import com.shop.shoes.project.data.model.Cart
import com.shop.shoes.project.data.model.Product
import com.shop.shoes.project.databinding.FragmentCartBinding
import com.shop.shoes.project.ui.main.base.BaseFragment
import com.shop.shoes.project.ui.main.detail.DetailProductActivity
import com.shop.shoes.project.utils.Constants
import com.shop.shoes.project.utils.Utils
import org.koin.android.ext.android.inject

class CartFragment : BaseFragment<FragmentCartBinding>() {

    private val carts = mutableListOf<Cart>()

    private val cartViewModel by inject<CartViewModel>()
    private val adapter by lazy(LazyThreadSafetyMode.NONE) {
        CartAdapter(carts,
            listener = { pos ->
                goToDetail(carts[pos].product!!)
            },
            listenerEdit = { pos ->
                //TODO
            }
        )
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

    private fun goToDetail(product: Product) {
        val json = Utils.convertProductToJson(product)
        val intent = Intent(activity, DetailProductActivity::class.java)
        intent.putExtra(Constants.EXTRA_PRODUCT, json)
        startActivity(intent)
    }
}