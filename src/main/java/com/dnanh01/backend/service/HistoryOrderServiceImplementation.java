package com.dnanh01.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.dnanh01.backend.model.HistoryOrder;
import com.dnanh01.backend.model.Order;
import com.dnanh01.backend.model.OrderItem;
import com.dnanh01.backend.repository.HistoryOrderRepository;
import com.dnanh01.backend.repository.OrderRepository;

@Service
public class HistoryOrderServiceImplementation implements HistoryOrderService {
	
	private HistoryOrderRepository historyOrderRepository;
	private OrderRepository orderRepository;

 
    public HistoryOrderServiceImplementation(HistoryOrderRepository historyOrderRepository,
			OrderRepository orderRepository) {
		super();
		this.historyOrderRepository = historyOrderRepository;
		this.orderRepository = orderRepository;
	}

    @Override
    public List<HistoryOrder> findUserHistoryOrder(Long userId) {
        List<Order> userOrders = orderRepository.getUsersOrders(userId);
        List<HistoryOrder> historyOrders = new ArrayList<>();

        for (Order order : userOrders) {
            int totalPrice = 0;
            int totalDiscountedPrice = 0;
            int totalItem = 0;

            for (OrderItem orderItem : order.getOrderItems()) {
                totalPrice += orderItem.getPrice();
                totalDiscountedPrice += orderItem.getDiscountedPrice();
                totalItem += orderItem.getQuantity();
            }

            HistoryOrder historyOrder = new HistoryOrder();
   //         historyOrder.setOrderId(order.getId());
            historyOrder.setTotalPrice_his(totalPrice);
            historyOrder.setTotalDiscountedPrice_his(totalDiscountedPrice);
            historyOrder.setTotalItem_his(totalItem);
            historyOrder.setDiscount_his(totalPrice - totalDiscountedPrice);
            historyOrder.setOrderStatus_his(order.getOrderStatus());
            historyOrder.setOrderDate_his(order.getOrderDate());
            historyOrder.setCreateAt_his(order.getCreateAt());
            // Bạn có thể thêm thông tin khác từ đơn hàng vào historyOrder tùy thuộc vào yêu cầu của bạn.

            historyOrders.add(historyOrder);
        }

        return historyOrders;
    }
}
