package com.shop.shoes.project.ui.main.home

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.shop.shoes.project.data.model.Product
import com.shop.shoes.project.databinding.ItemProductsBinding
import com.shop.shoes.project.utils.Pref.context

class ProductAdapter(
    private var records: List<Product>,
    private val listener: (Int) -> Unit,
) : RecyclerView.Adapter<ProductAdapter.VH>() {
    inner class VH(private val binding: ItemProductsBinding) :
        RecyclerView.ViewHolder(binding.root) {
        fun onBind(item: Product) {
            binding.run {
                Glide.with(context).load(item.imageUrl).into(imgPic)
                tvName.text = item.title
                if (item.discountedPrice == 0) {
                    tvDiscount.visibility = View.GONE
                    tvPrice.text = item.price.toString()
                } else {
                    tvDiscount.text = item.price.toString()
                    tvPrice.text = item.discountedPrice.toString()
                }
                tvType.text = item.brand?.name
            }
        }
    }

    @SuppressLint("NotifyDataSetChanged")
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): VH = VH(
        ItemProductsBinding.inflate(LayoutInflater.from(parent.context), parent, false)
    ).apply {
        itemView.setOnClickListener {
            if (adapterPosition != RecyclerView.NO_POSITION) {
                listener.invoke(adapterPosition)
                notifyDataSetChanged()
            }
        }
    }

    override fun getItemCount(): Int = records.size

    override fun onBindViewHolder(holder: VH, position: Int) {
        holder.onBind(records[position])
    }

    @SuppressLint("NotifyDataSetChanged")
    fun updateData(new: List<Product>) {
        records = new
        notifyDataSetChanged()
    }
}