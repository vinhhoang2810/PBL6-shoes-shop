package com.shop.shoes.project.utils

import com.chibatching.kotpref.KotprefModel

object Pref : KotprefModel() {
    var accessToken by stringPref("")
    var idStartStation by intPref(-1)
    var idEndStation by intPref(-1)
    var isStart by booleanPref(false)
    var userName by stringPref("")
}
