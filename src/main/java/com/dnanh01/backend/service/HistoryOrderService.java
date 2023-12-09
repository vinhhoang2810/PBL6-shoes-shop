package com.dnanh01.backend.service;

import java.util.List;

import com.dnanh01.backend.model.HistoryOrder;

public interface HistoryOrderService {
	 public List<HistoryOrder> findUserHistoryOrder(Long userId);

}
