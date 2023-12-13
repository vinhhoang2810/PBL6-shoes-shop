package com.dnanh01.backend.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class HistoryOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "historyOrder", cascade = CascadeType.ALL)
    private List<HistoryOrderItem> historyOrderItems = new ArrayList<>();

    private LocalDateTime orderDate_his;
    
    private double totalPrice_his;

    private Integer totalDiscountedPrice_his;

    private Integer discount_his;

    private String orderStatus_his;

    private int totalItem_his;

    private LocalDateTime createAt_his;


	public HistoryOrder() {
		super();
		// TODO Auto-generated constructor stub
	}


	public HistoryOrder(Long id, User user, List<HistoryOrderItem> historyOrderItems, LocalDateTime orderDate_his,
			double totalPrice_his, Integer totalDiscountedPrice_his,
			Integer discount_his, String orderStatus_his, int totalItem_his, LocalDateTime createAt_his) {
		super();
		this.id = id;
		this.user = user;
		this.historyOrderItems = historyOrderItems;
		this.orderDate_his = orderDate_his;
		this.totalPrice_his = totalPrice_his;
		this.totalDiscountedPrice_his = totalDiscountedPrice_his;
		this.discount_his = discount_his;
		this.orderStatus_his = orderStatus_his;
		this.totalItem_his = totalItem_his;
		this.createAt_his = createAt_his;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public List<HistoryOrderItem> getHistoryOrderItems() {
		return historyOrderItems;
	}


	public void setHistoryOrderItems(List<HistoryOrderItem> historyOrderItems) {
		this.historyOrderItems = historyOrderItems;
	}


	public LocalDateTime getOrderDate_his() {
		return orderDate_his;
	}


	public void setOrderDate_his(LocalDateTime orderDate_his) {
		this.orderDate_his = orderDate_his;
	}


	public double getTotalPrice_his() {
		return totalPrice_his;
	}


	public void setTotalPrice_his(double totalPrice_his) {
		this.totalPrice_his = totalPrice_his;
	}


	public Integer getTotalDiscountedPrice_his() {
		return totalDiscountedPrice_his;
	}


	public void setTotalDiscountedPrice_his(Integer totalDiscountedPrice_his) {
		this.totalDiscountedPrice_his = totalDiscountedPrice_his;
	}


	public Integer getDiscount_his() {
		return discount_his;
	}


	public void setDiscount_his(Integer discount_his) {
		this.discount_his = discount_his;
	}


	public String getOrderStatus_his() {
		return orderStatus_his;
	}


	public void setOrderStatus_his(String orderStatus_his) {
		this.orderStatus_his = orderStatus_his;
	}


	public int getTotalItem_his() {
		return totalItem_his;
	}


	public void setTotalItem_his(int totalItem_his) {
		this.totalItem_his = totalItem_his;
	}


	public LocalDateTime getCreateAt_his() {
		return createAt_his;
	}


	public void setCreateAt_his(LocalDateTime createAt_his) {
		this.createAt_his = createAt_his;
	}




   
}