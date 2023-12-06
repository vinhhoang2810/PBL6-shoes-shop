package com.shop.shoes.project.ui.main.home

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.shop.shoes.project.data.model.Product
import com.shop.shoes.project.databinding.ItemProductsBinding

class ProductAdapter(
    private var records: List<Product>,
    private val listener: (Int) -> Unit,
) : RecyclerView.Adapter<ProductAdapter.VH>() {
    inner class VH(private val binding: ItemProductsBinding) : RecyclerView.ViewHolder(binding.root) {
        fun onBind(item: Product) {
            binding.run {

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
    fun updateData(new: List<Product>){
        records = new
        notifyDataSetChanged()
    }
}