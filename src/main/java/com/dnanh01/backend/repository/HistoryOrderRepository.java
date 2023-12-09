package com.dnanh01.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dnanh01.backend.model.HistoryOrder;

public interface HistoryOrderRepository extends JpaRepository<HistoryOrder, Long> {
    // You can add custom query methods if needed
    // For example, finding historical orders by user ID
    List<HistoryOrder> findByUserId(Long userId);
}