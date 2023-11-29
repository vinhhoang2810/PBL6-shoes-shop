package com.shop.shoes.project.data.source.local

import androidx.room.RoomDatabase

abstract class LocalDatabase : RoomDatabase() {
    abstract fun localDao(): LocalDao

}
