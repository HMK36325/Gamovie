package com.gamovie.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamovie.app.entity.Movie;
import com.gamovie.app.entity.MovieReview;
import com.gamovie.app.entity.User;

@Service
public class MovieReviewFacade {

	@Autowired
	private MovieReviewService movieReviewService;

	@Autowired
	private MovieService movieService;

	@Autowired
	private UserService userService;

	public MovieReview findById(int id) {
		return movieReviewService.findById(id);
	}

	public List<MovieReview> allReviewsByUser(int id) {
		User user = userService.findById(id);
		return movieReviewService.allReviewsByUser(user);
	}

	public List<MovieReview> allReviewsByMovie(int id) {
		Movie movie = movieService.findById(id);
		return movieReviewService.allReviewsByMovie(movie);
	}

	public MovieReview addMovieVote(int user_id, int movie_id, String review) {
		User theUser = userService.findById(user_id);
		Movie theMovie = movieService.findById(movie_id);
		MovieReview theMovieReview = new MovieReview();
		LocalDate reviewed_at= LocalDate.now();
		theMovieReview.setReview(review);
		theMovieReview.setMovie(theMovie);
		theMovieReview.setUser(theUser);
		theMovieReview.setReviewed_at(reviewed_at);
		movieReviewService.save(theMovieReview);
		return theMovieReview;
	}

	public MovieReview updateMovieReview(int id, int user_note) {
		MovieReview theMovieReview = movieReviewService.findById(id);
		movieReviewService.save(theMovieReview);
		return theMovieReview;
	}

	public void deleteById(int id) {
		movieReviewService.deletedById(id);
	}

}
