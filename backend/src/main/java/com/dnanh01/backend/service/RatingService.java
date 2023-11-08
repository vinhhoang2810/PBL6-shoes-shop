package com.dnanh01.backend.service;

import java.util.List;

import com.dnanh01.backend.exception.ProductException;
import com.dnanh01.backend.model.Rating;
import com.dnanh01.backend.model.User;
import com.dnanh01.backend.request.RatingRequest;

public interface RatingService {
    public Rating createRating(RatingRequest req, User user) throws ProductException;

    public List<Rating> getProductsRating(Long productId);
}
