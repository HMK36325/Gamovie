package com.gamovie.app.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.gamovie.app.entity.Movie;

public interface MovieService {
	/**
	 * Find all.
	 *
	 * @return the list
	 */
	public List<Movie> findAll();

	/**
	 * Find by id.
	 *
	 * @param id the the id
	 * @return the movie
	 */
	public Movie findById(int id);

	/**
	 * Save.
	 *
	 * @param theMovie the the movie
	 */
	public void save(Movie theMovie);

	/**
	 * Delete by.
	 *
	 * @param theId the the id
	 */
	public void deleteBy(int theId);

	List<Movie> allMoviesByCategory(String cat);
	
	List<Movie> findByName(String name);

	public Page<Movie> getMoviesWithPagination(int offset, int pageSize);

}
