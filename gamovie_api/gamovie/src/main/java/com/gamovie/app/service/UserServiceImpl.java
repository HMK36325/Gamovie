package com.gamovie.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamovie.app.entity.User;
import com.gamovie.app.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public User findById(int theId) {
		Optional<User> result = userRepository.findById(theId);
		if (result.isPresent()) {
			return result.get();
		} else {
			throw new RuntimeException("Did not found user id: " + theId);
		}
	}

	@Override
	public void save(User theUser) {
		userRepository.save(theUser);

	}

	@Override
	public void deleteBy(int theId) {
		userRepository.deleteById(theId);

	}

}
