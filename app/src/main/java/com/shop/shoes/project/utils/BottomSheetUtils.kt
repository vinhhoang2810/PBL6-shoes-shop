package com.shop.shoes.project.utils

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.bottomsheet.BottomSheetDialog
import com.shop.shoes.project.data.model.Product
import com.shop.shoes.project.data.model.Size
import com.shop.shoes.project.data.model.SizeShow
import com.shop.shoes.project.databinding.BottomSheetCartBinding
import com.shop.shoes.project.ui.main.cart.SizeAdapter

object BottomSheetUtils {
    fun showBottomReminds(
        context: Context,
        product: Product,
        listener: () -> Unit,
    ) {
        val listSize = getListSizeShow(product.sizes)
        val sizeAdapter = SizeAdapter(listSize) { pos ->
        }
        val bottomSheetBinding = BottomSheetCartBinding.inflate(LayoutInflater.from(context))
        val bottomSheetDialog = BottomSheetDialog(context)
        bottomSheetDialog.setCancelable(false)
        bottomSheetDialog.setContentView(bottomSheetBinding.root)
        bottomSheetBinding.run {
            rvSize.run {
                layoutManager = LinearLayoutManager(context, LinearLayoutManager.HORIZONTAL, false)
                adapter = sizeAdapter
            }
            btnSave.setOnClickListener {
                listener.invoke()
                bottomSheetDialog.dismiss()
            }
            btnCancel.setOnClickListener {
                bottomSheetDialog.dismiss()
            }
        }
        bottomSheetDialog.show()
    }

    private fun getListSizeShow(list: List<Size>): List<SizeShow> {
        val sizes = mutableListOf<SizeShow>()
        for (i in list.indices) {
            sizes.add(SizeShow(size = list[i].name, isSelected = i == 0))
        }
        return sizes
    }
}