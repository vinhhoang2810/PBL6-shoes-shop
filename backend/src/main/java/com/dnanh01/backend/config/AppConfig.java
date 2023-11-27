package com.dnanh01.backend.config;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import com.dnanh01.backend.model.User;
import com.dnanh01.backend.service.UserServiceImplementation;

import jakarta.servlet.http.HttpServletRequest;

@Configuration
@EnableAutoConfiguration
public class AppConfig implements UserDetailsService {

	@Autowired
	private UserServiceImplementation userServiceImplementation;
	
    // Configuration for the Spring Security filter chain
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
        User user = userServiceImplementation.getUserByEmail(email);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }

        // @formatter:off
        UserDetails details = org.springframework.security.core.userdetails.User
                .builder().username(user.getEmail()).password(user.getPassword())
                .roles(user.getRole()).disabled(false).build();
        // @formatter:on

        return details;
    }
	
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Set session creation policy to STATELESS
                .and()
                .authorizeHttpRequests(Authorize -> Authorize.requestMatchers("/auth/**","/api/**","/index","/order","/guest/**").permitAll()
                		.anyRequest().authenticated()
//        				.requestMatchers("/user/**").hasRole("USER")
//        				.requestMatchers("/admin/**").hasRole("ADMIN"))
                ).addFilterBefore(
                        new JwtValidator(), BasicAuthenticationFilter.class // Add JwtValidator before
                                                                            // BasicAuthenticationFilter
                ).csrf() // Disable Cross-Site Request Forgery (CSRF) protection
                .disable()
                .cors() // Enable Cross-Origin Resource Sharing (CORS)
                .configurationSource(
                        new CorsConfigurationSource() {

                            @Override
                            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
                                CorsConfiguration cfg = new CorsConfiguration();
                                cfg.setAllowedOrigins(Arrays.asList(
                                        "http://localhost:3000",
                                        "http://localhost:4200",
                                        "http://localhost:5454",
                                        "https://pbl6-shoes-shop-production.up.railway.app",
                                        "https://study-fontend.vercel.app"));
                                cfg.setAllowedMethods(Collections.singletonList("*"));
                                cfg.setAllowCredentials(true);
                                cfg.setAllowedHeaders(Collections.singletonList("*"));
                                cfg.setExposedHeaders(Arrays.asList("Authorization"));
                                cfg.setMaxAge(3600L);
                                return cfg;
                            }

                        });
        http.csrf(t->t.disable());
        return http.build(); // Build and return the configured HttpSecurity object
    }

    // Bean definition for PasswordEncoder
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Use BCryptPasswordEncoder for password encoding
    }
}