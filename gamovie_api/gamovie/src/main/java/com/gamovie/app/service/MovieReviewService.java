package com.gamovie.app.service;

import java.util.List;

import com.gamovie.app.entity.Movie;
import com.gamovie.app.entity.MovieReview;
import com.gamovie.app.entity.User;

public interface MovieReviewService {
	public MovieReview findById(int theId);
	
	public void save(MovieReview movieReview);
	
	public void deletedById(int theId);
	
	List<MovieReview> allReviewsByUser(User user);
	
	List<MovieReview> allReviewsByMovie(Movie movie);
}
