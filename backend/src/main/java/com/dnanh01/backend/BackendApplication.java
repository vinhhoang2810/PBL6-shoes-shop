package com.dnanh01.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	// all controller:
	// https://www.youtube.com/watch?v=o2eh5DW4EA8&list=PL7Oro2kvkIzK9X9ctS7bK3VVq0zsEYQsR&index=11

	// swagger ui: https://www.youtube.com/watch?v=2o_3hjUPAfQ&t=170s
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
		System.out.println("\u001B[33m" + "App is working!!" + "\u001B[0m");
		System.out.println("\u001B[32m" + "App is working!!" + "\u001B[0m");
		System.out.println("\u001B[34m" + "App is working!!" + "\u001B[0m");
	}
}
