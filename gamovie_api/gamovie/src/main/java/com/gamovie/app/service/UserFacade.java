package com.gamovie.app.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.gamovie.app.dto.UserDTO;
import com.gamovie.app.entity.Role;
import com.gamovie.app.entity.User;
import com.gamovie.app.repository.RoleRepository;

@Service
public class UserFacade {
	/** The user service. */
	@Autowired
	private UserService userService;
	
	@Autowired
	private RoleRepository roleRepository;

	/** The model mapper. */
	@Autowired
	private ModelMapper modelMapper;

	/**
	 * Gets the all users.
	 *
	 * @return the all users
	 */
	public List<UserDTO> getAllUsers() {
		return userService.findAll().stream().map(this::convertToUserDTO).collect(Collectors.toList());
	}
	
	public Page<User> usersWithPagination(int offset, int pageSize){
		return userService.allUsersWithPagination(offset, pageSize);
	}

	/**
	 * Find by id.
	 *
	 * @param id the id
	 * @return the user DTO
	 */
	public UserDTO findById(int id) {
		return convertToUserDTO(userService.findById(id));
	}

	/**
	 * Adds the user.
	 *
	 * @param userdto the userdto
	 * @return the user
	 */
	public User addUser(UserDTO userdto) {
		User user = convertToUser(userdto);
		userService.save(user);
		return user;
	}

	/**
	 * Delete by id.
	 *
	 * @param id the id
	 */
	public void deleteById(int id) {
		userService.deleteBy(id);
	}

	/**
	 * Ban user.
	 *
	 * @param id the user_id
	 */
	public String userBan(int user_id) {
		User theUser = userService.findById(user_id);
		if(theUser ==null) {
			throw new RuntimeException("Did not found user id: " + user_id);
		}
		theUser.setBanned_at(LocalDate.now());
		userService.save(theUser);
		return "User banned";
	}
	
	public String userUnBan(int user_id) {
		User theUser = userService.findById(user_id);
		if(theUser ==null) {
			throw new RuntimeException("Did not found user id: " + user_id);
		}
		theUser.setBanned_at(null);
		userService.save(theUser);
		return "User Unbanned";
	}
	
	public String addRolePremiun(int user_id) {
		User theUser = userService.findById(user_id);
		if(theUser ==null) {
			throw new RuntimeException("Did not found user id: " + user_id);
		}
		Role premRole = roleRepository.findByName("ROLE_PREMIUM")
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		theUser.addRole(premRole);

		userService.save(theUser);
		return "Role premium added to user with id: " + user_id;
	}

	/**
	 * Convert to user DTO.
	 *
	 * @param user the user
	 * @return the user DTO
	 */
	public UserDTO convertToUserDTO(User user) {
		UserDTO userDto = modelMapper.map(user, UserDTO.class);
		return userDto;
	}

	/**
	 * Convert to user.
	 *
	 * @param userDTO the user DTO
	 * @return the user
	 */
	public User convertToUser(UserDTO userDTO) {
		User user = modelMapper.map(userDTO, User.class);
		return user;
	}
}
