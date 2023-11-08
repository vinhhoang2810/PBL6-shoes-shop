package com.dnanh01.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dnanh01.backend.exception.OrderException;
import com.dnanh01.backend.model.Address;
import com.dnanh01.backend.model.Order;
import com.dnanh01.backend.model.User;
import com.dnanh01.backend.repository.CartRepository;

@Service
public class OrderServiceImplementation implements OrderService {

	private CartRepository cartRepository;
	private CartService cartItemService;
	private ProductService productService;

	public OrderServiceImplementation(
			CartRepository cartRepository,
			CartService cartItemService,
			ProductService productService) {
		this.cartRepository = cartRepository;
		this.cartItemService = cartItemService;
		this.productService = productService;
	}

	@Override
	public Order createOrder(User user, Address shipingAdress) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order findOrderById(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Order> usersOrderHistory(Long UserId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order placedOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order comfirmedOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order shippedOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order deliveredOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order cancledOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Order> getAllOrders() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub

	}

}
