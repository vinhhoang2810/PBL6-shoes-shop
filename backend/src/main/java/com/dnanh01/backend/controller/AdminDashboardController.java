package com.dnanh01.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dnanh01.backend.exception.OrderException;
import com.dnanh01.backend.exception.UserException;
import com.dnanh01.backend.response.SingleProductResponse;

@RestController
@RequestMapping("api/admin/dashboard")
public class AdminDashboardController {

    @GetMapping("/best-selling-product")
    public ResponseEntity<SingleProductResponse> getBestSellingProduct(
            @RequestHeader("Authorization") String jwt)
            throws UserException, OrderException {
        // code tìm sản phẩm có lượt order status
        return null;
    }

}
