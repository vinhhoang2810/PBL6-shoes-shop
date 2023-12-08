package com.shop.shoes.project.utils

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import androidx.recyclerview.widget.LinearLayoutManager
import com.google.android.material.bottomsheet.BottomSheetDialog
import com.shop.shoes.project.data.model.BodyCart
import com.shop.shoes.project.data.model.Product
import com.shop.shoes.project.data.model.Size
import com.shop.shoes.project.data.model.SizeShow
import com.shop.shoes.project.databinding.BottomSheetCartBinding
import com.shop.shoes.project.ui.main.ShareViewModel
import com.shop.shoes.project.ui.main.cart.SizeAdapter

object BottomSheetUtils {
    private var sizeSelect = ""
    fun showBottomReminds(
        context: Context,
        product: Product,
        viewModel: ShareViewModel
    ) {
        val listSize = getListSizeShow(product.sizes)
        val sizeAdapter = SizeAdapter(listSize) { pos ->
            listSize.forEach {
                if (listSize[pos].quantity > 0) {
                    it.isSelected = it == listSize[pos]
                    sizeSelect = listSize[pos].size
                }
            }
        }
        val bottomSheetBinding = BottomSheetCartBinding.inflate(LayoutInflater.from(context))
        val bottomSheetDialog = BottomSheetDialog(context)
        bottomSheetDialog.setContentView(bottomSheetBinding.root)
        bottomSheetBinding.run {
            rvSize.run {
                layoutManager = LinearLayoutManager(context, LinearLayoutManager.HORIZONTAL, false)
                adapter = sizeAdapter
            }
            btnSave.setOnClickListener {
                viewModel.addNewCart(
                    BodyCart(
                        productId = product.id,
                        quantity = tvQuality.text.toString().toInt(),
                        size = sizeSelect,
                        color = product.color
                    )
                ) {
                    bottomSheetDialog.dismiss()
                }
            }
            btnCancel.setOnClickListener {
                bottomSheetDialog.dismiss()
            }
            btnMinus.setOnClickListener {
                tvQuality.text = changeQuality(tvQuality.text.toString(), isPlus = false)
                if (tvQuality.text == "1") btnMinus.visibility = View.INVISIBLE
            }
            btnAdd.setOnClickListener {
                tvQuality.text = changeQuality(tvQuality.text.toString(), isPlus = true)
                btnMinus.visibility = View.VISIBLE
            }
        }
        bottomSheetDialog.show()
    }

    private fun getListSizeShow(list: List<Size>): List<SizeShow> {
        var isSelected = false
        val sizes = mutableListOf<SizeShow>()
        for (i in list.indices) {
            if (list[i].quantity == 0 || isSelected) {
                sizes.add(
                    SizeShow(size = list[i].name, isSelected = false, quantity = list[i].quantity)
                )
            } else {
                sizes.add(
                    SizeShow(size = list[i].name, isSelected = true, quantity = list[i].quantity)
                )
                sizeSelect = list[i].name
                isSelected = true
            }
        }
        return sizes
    }

    private fun changeQuality(quality: String, isPlus: Boolean): String {
        return try {
            val newData = if (isPlus) {
                quality.toInt() + 1
            } else {
                quality.toInt() - 1
            }
            if (newData < 1) "1" else "$newData"
        } catch (e: Exception) {
            "1"
        }
    }
}