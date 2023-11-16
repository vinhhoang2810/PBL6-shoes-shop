package com.dnanh01.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {
	/**
	 * learn swagger: https://www.youtube.com/watch?v=A_RWUcTqHBI
	 * 
	 * step:
	 * 1. How to add OpenAPI 3.0 And Swagger To Spring Boot Application
	 * 2. Create Custom Response
	 * 3. Create Custom Request
	 * 4. Grouping endpoint
	 * 
	 * 
	 * VNPay: https://www.youtube.com/watch?v=s3O0DDhIhT0,
	 * https://www.youtube.com/watch?v=Vghgs27EXRM
	 */

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
		System.out.println("\u001B[33m" + "App is working!!" + "\u001B[0m");
		System.out.println("\u001B[32m" + "App is working!!" + "\u001B[0m");
		System.out.println("\u001B[34m" + "App is working!!" + "\u001B[0m");
	}
}
