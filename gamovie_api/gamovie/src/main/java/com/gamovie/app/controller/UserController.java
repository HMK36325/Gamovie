package com.gamovie.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamovie.app.dto.UserDTO;
import com.gamovie.app.entity.User;
import com.gamovie.app.service.UserFacade;

/**
 * The Class UserController.
 */
@RestController
@RequestMapping("/users")
public class UserController {

	/** The user facade. */
	@Autowired
	private UserFacade userFacade;

	/**
	 * Gets the user DTO list.
	 *
	 * @return the user DTO list
	 */

	@GetMapping()
	public List<UserDTO> getUserDTOList() {
		return userFacade.getAllUsers();
	}

	/**
	 * Gets the user DTO.
	 *
	 * @param id the id
	 * @return the user DTO
	 */
	@GetMapping("/{id}")
	public UserDTO getUserDTO(@PathVariable int id) {
		return userFacade.findById(id);
	}

	/**
	 * Adds the user.
	 *
	 * @param userdto the userdto
	 * @return the user
	 */
	@PostMapping()
	public User addUser(@RequestBody UserDTO userdto) {
		User user = userFacade.addUser(userdto);
		return user;

	}

	/**
	 * Update user.
	 *
	 * @param userdto the userdto
	 * @return the user
	 */
	@PutMapping()
	public User UpdateUser(@RequestBody UserDTO userdto) {
		User user = userFacade.addUser(userdto);
		return user;

	}

	/**
	 * Delete user.
	 *
	 * @param id the id
	 * @return the string
	 */
	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable int id) {
		UserDTO theUser = userFacade.findById(id);
		if (theUser == null) {
			throw new RuntimeException("User is not found " + id);
		}
		userFacade.deleteById(id);
		return "User deleted";
	}

}