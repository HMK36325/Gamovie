package com.gamovie.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
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
	@PreAuthorize("hasRole('ADMIN')")
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
	@PreAuthorize("hasRole('ADMIN')")
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
	@PreAuthorize("hasRole('ADMIN')")
	public User addUser(@RequestBody UserDTO userdto) {
		User user = userFacade.addUser(userdto);
		return user;

	}

	/**
	 * ban user.
	 *
	 * @param int user_id
	 * @return string
	 */
	@PutMapping("/ban/{user_id}")
	@PreAuthorize("hasRole('ADMIN')")
	public String banUser(@PathVariable int user_id) {
		return userFacade.userBan(user_id);

	}

	/**
	 * Unban user.
	 *
	 * @param int user_id
	 * @return string
	 */
	@PutMapping("unban/{user_id}")
	@PreAuthorize("hasRole('ADMIN')")
	public String UnBanUser(@PathVariable int user_id) {
		return userFacade.userUnBan(user_id);

	}

	/**
	 * Update user.
	 *
	 * @param userdto the userdto
	 * @return the user
	 */
	@PutMapping()
	@PreAuthorize("hasRole('ADMIN')")
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
	@PreAuthorize("hasRole('ADMIN')")
	public String deleteUser(@PathVariable int id) {
		UserDTO theUser = userFacade.findById(id);
		if (theUser == null) {
			throw new RuntimeException("User is not found " + id);
		}
		userFacade.deleteById(id);
		return "User deleted";
	}

}