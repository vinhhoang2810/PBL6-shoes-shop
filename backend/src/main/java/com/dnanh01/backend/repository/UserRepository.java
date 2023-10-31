package com.dnanh01.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dnanh01.backend.model.User;


public interface UserRepository extends JpaRepository<User, Long> {
    public User findUserByEmail(String email);
}