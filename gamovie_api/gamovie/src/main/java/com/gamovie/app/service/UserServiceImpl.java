package com.gamovie.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
		List<User> result = userRepository.findAll();
		System.out.println(result);
		return result;
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

	public Page<User> allUsersWithPagination(int offset, int pageSize) {
		Page<User> users = userRepository.findAll(PageRequest.of(offset, pageSize));
		if (!users.isEmpty()) {
			users.stream().forEach((user) -> {
				user.setPassword(null);
			});
			return users;
		} else {
			throw new RuntimeException("Did not found users");
		}
	}

}
