package com.gamovie.app.service;

import java.util.List;

import com.gamovie.app.entity.Game;

public interface GameService {
	/**
	 * Find all.
	 *
	 * @return the list
	 */
	public List<Game> findAll();

	/**
	 * Find by id.
	 *
	 * @param id the the id
	 * @return the movie
	 */
	public Game findById(int id);

	/**
	 * Save.
	 *
	 * @param theMovie the the movie
	 */
	public void save(Game theGame);

	/**
	 * Delete by.
	 *
	 * @param theId the the id
	 */
	public void deleteBy(int theId);
}
