package com.dnanh01.backend.controller;

import java.security.Principal;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@GetMapping("/index")
	public ResponseEntity<?> trangChu(){
		return ResponseEntity.ok("Trang chủ");
	}
	@GetMapping("/admin")
	public ResponseEntity<?> admin(Principal principal){
		return ResponseEntity.ok("Xin chào admin "+principal.getName());
	}
	
	@GetMapping("/user")
	public ResponseEntity<?> usre(Principal principal){
		return ResponseEntity.ok("Xin chào user "+principal.getName());
	}
	@GetMapping("/order")
	public ResponseEntity<?> order(){
		return ResponseEntity.ok("Order");
	}
}
 

