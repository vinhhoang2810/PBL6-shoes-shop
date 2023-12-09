package com.dnanh01.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dnanh01.backend.exception.UserException;
import com.dnanh01.backend.model.HistoryOrder;
import com.dnanh01.backend.model.User;
import com.dnanh01.backend.service.HistoryOrderService;
import com.dnanh01.backend.service.UserService;

@RestController
@RequestMapping("/api/history-orders")
public class HistoryOrderController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private HistoryOrderService historyOrderService;
    
    @GetMapping("/")
    public ResponseEntity<List<HistoryOrder>> findUserHistory(
    		@RequestHeader("Authorization") String jwt) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        List<HistoryOrder> historyOrders = historyOrderService.findUserHistoryOrder(user.getId());
        return new ResponseEntity<>(historyOrders,HttpStatus.OK);
    }
}
