package com.gamovie.app.service;

import java.util.List;

import com.gamovie.app.entity.User;

/**
 * The Interface UserService.
 */
public interface UserService {

	/**
	 * Find all.
	 *
	 * @return the list
	 */
	public List<User> findAll();
	
	/**
	 * Find by id.
	 *
	 * @param theId the the id
	 * @return the user
	 */
	public User findById(int theId);
	
	/**
	 * Save.
	 *
	 * @param theUser the the user
	 */
	public void save(User theUser);
	
	/**
	 * Delete by.
	 *
	 * @param theId the the id
	 */
	public void deleteBy(int theId);
}