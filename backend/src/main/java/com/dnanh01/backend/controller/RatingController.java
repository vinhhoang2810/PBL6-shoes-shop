package com.dnanh01.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dnanh01.backend.exception.ProductException;
import com.dnanh01.backend.exception.UserException;
import com.dnanh01.backend.model.Rating;
import com.dnanh01.backend.model.User;
import com.dnanh01.backend.request.RatingRequest;
import com.dnanh01.backend.service.RatingService;
import com.dnanh01.backend.service.UserService;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    @Autowired
    private UserService userService;

    @Autowired
    private RatingService ratingService;

    @PostMapping("/create")
    public ResponseEntity<Rating> createRating(
            @RequestBody RatingRequest req,
            @RequestHeader("Authorization") String jwt) throws UserException, ProductException {
        User user = userService.findUserProfileByJwt(jwt);
        Rating rating = ratingService.createRating(req, user);

        return ResponseEntity.status(HttpStatus.CREATED).body(rating);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Rating>> getProductsRating(
            @PathVariable("productId") Long productId,
            @RequestHeader("Authorization") String jwt) throws UserException, ProductException {
        User user = userService.findUserProfileByJwt(jwt);
        List<Rating> ratings = ratingService.getProductsRating(user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(ratings);
    }

}
