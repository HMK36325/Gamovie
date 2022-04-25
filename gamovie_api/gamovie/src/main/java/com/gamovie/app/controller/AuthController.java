package com.gamovie.app.controller;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AuthorizationServiceException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamovie.app.entity.Role;
import com.gamovie.app.entity.User;
import com.gamovie.app.repository.RoleRepository;
import com.gamovie.app.repository.UserRepository;
import com.gamovie.app.security.jwt.JwtUtils;
import com.gamovie.app.security.request.LoginRequest;
import com.gamovie.app.security.request.SignupRequest;
import com.gamovie.app.security.response.JwtResponse;
import com.gamovie.app.security.response.MessageResponse;
import com.gamovie.app.security.userDetails.UserDetailsImpl;

@RestController
@RequestMapping("/auth")
public class AuthController {

	// (declarado en websecurity config)proprocionado por spring, devuelve true si
	// un usuario se ha autentificado correctamente y sino excepcion
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	// (declarado en websecurity config para encripta la psswd)
	@Autowired
	PasswordEncoder encoder;

	@Autowired
	// clase jwtutils
	JwtUtils jwtUtils;

//para login
	@PostMapping("/signin")

	public JwtResponse authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		// comprueba nombre y passwd del login
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		// autentifico
		SecurityContextHolder.getContext().setAuthentication(authentication);
		// creo el token
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

		Optional<User> result = userRepository.findById(userDetails.getId());
		if (result.isPresent()) {
			if (result.get().getBanned_at() != null) {
				throw new AuthorizationServiceException("User: " + userDetails.getUsername() + " is banned");
			}
		}

		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());

		JwtResponse response = new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(),
				userDetails.getEmail(), roles);
		return response;
	}

	@PostMapping("/signup") // usare responseentity en lugar de user(si esta mejor user lanzare excepcion)
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByName(signUpRequest.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		User user = new User(signUpRequest.getUsername(), signUpRequest.getEmail(),
				encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName("ROLE_USER")
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			user.addRole(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName("ROLE_ADMIN")
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					user.addRole(adminRole);

					break;
				case "premium":
					Role premRole = roleRepository.findByName("ROLE_PREMIUM")
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					user.addRole(premRole);

					break;
				default:
					Role userRole = roleRepository.findByName("ROLE_USER")
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					user.addRole(userRole);
				}
			});
		}

		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}
