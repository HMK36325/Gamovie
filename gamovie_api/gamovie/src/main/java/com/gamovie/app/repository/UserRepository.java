package com.gamovie.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gamovie.app.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByName(String name);
	
	Boolean existsByName(String name);

	Boolean existsByEmail(String email);
	
}
