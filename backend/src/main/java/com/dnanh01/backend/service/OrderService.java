package com.dnanh01.backend.service;

import java.util.List;

import com.dnanh01.backend.exception.OrderException;
import com.dnanh01.backend.model.Address;
import com.dnanh01.backend.model.Order;
import com.dnanh01.backend.model.User;

public interface OrderService {

	public Order createOrder(User user, Address shipingAdress);

	public Order findOrderById(Long orderId) throws OrderException;

	public List<Order> usersOrderHistory(Long UserId);

	public Order placedOrder(Long orderId) throws OrderException;

	public Order comfirmedOrder(Long orderId) throws OrderException;

	public Order shippedOrder(Long orderId) throws OrderException;

	public Order deliveredOrder(Long orderId) throws OrderException;

	public Order cancledOrder(Long orderId) throws OrderException;

	public List<Order> getAllOrders();

	public void deleteOrder(Long orderId) throws OrderException;

}
