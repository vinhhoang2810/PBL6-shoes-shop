package com.shop.shoes.project.ui.main.detail

import android.graphics.Paint
import android.view.LayoutInflater
import android.view.View
import androidx.recyclerview.widget.LinearLayoutManager
import com.bumptech.glide.Glide
import com.shop.shoes.project.data.model.Product
import com.shop.shoes.project.data.model.Review
import com.shop.shoes.project.databinding.ActivityDetailProductBinding
import com.shop.shoes.project.ui.main.base.BaseActivity
import com.shop.shoes.project.utils.Constants
import com.shop.shoes.project.utils.Utils

class DetailProductActivity : BaseActivity<ActivityDetailProductBinding>() {

    private var entity: Product? = null

    private val listRating = mutableListOf<Review>()

    private val adapter by lazy(LazyThreadSafetyMode.NONE) { RatingAdapter(listRating) }

    override fun viewBinding(inflate: LayoutInflater): ActivityDetailProductBinding =
        ActivityDetailProductBinding.inflate(inflate)

    override fun initView() = binding.run {
        if (entity != null) {
            Glide.with(this@DetailProductActivity).load(entity!!.imageUrl).into(imgPic)
            tvName.text = entity!!.title
            if (entity!!.discountedPrice == 0) {
                tvDiscount.visibility = View.GONE
                tvPrice.text = entity!!.price.toString()
                tvSale.visibility = View.GONE
            } else {
                tvDiscount.text = entity!!.price.toString()
                tvDiscount.paintFlags = Paint.STRIKE_THRU_TEXT_FLAG;
                tvPrice.text = entity!!.discountedPrice.toString()
                val text = "-${entity!!.discountPersent}%"
                tvSale.text = text
            }
            val quality = "${entity!!.quantity} products available"
            tvQuality.text = quality
            tvDes.text = entity!!.description
            if (entity!!.reviews.isNotEmpty()) {
                tvRating.text = getRating(entity!!.reviews)
                tvNoRating.visibility = View.GONE
                rvRating.layoutManager = LinearLayoutManager(this@DetailProductActivity)
                listRating.run {
                    clear()
                    addAll(entity!!.reviews)
                }
                adapter.notifyDataSetChanged()
                rvRating.adapter = adapter
            } else {
                clRating.visibility = View.GONE
            }
        } else {
            finish()
        }
    }

    override fun initData() {
        val json = intent.getStringExtra(Constants.EXTRA_PRODUCT)
        if (json != null) {
            entity = Utils.convertJsonToProduct(json)
        }
    }

    override fun initListener() {
    }

    private fun getRating(list: List<Review>): String {
        var rate = 0
        list.forEach {
            rate += it.rating
        }
        rate /= list.size
        return rate.toString()
    }
}