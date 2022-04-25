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

import com.gamovie.app.dto.MovieReviewDTO;
import com.gamovie.app.entity.MovieReview;
import com.gamovie.app.service.MovieReviewFacade;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

	@Autowired
	private MovieReviewFacade movieReviewFacade;

	@GetMapping("/movies/user/{id}")
	public List<MovieReview> getMovieReviewsByUser(@PathVariable int id) {
		return movieReviewFacade.allReviewsByUser(id);
	}

	@GetMapping("/movies/movie/{id}")
	public List<MovieReview> getMovieReviewsByMovie(@PathVariable int id) {
		return movieReviewFacade.allReviewsByMovie(id);
	}
	
	@PostMapping("/movies/{user_id}/{movie_id}")
	public MovieReview addMovieReview (@PathVariable int user_id, @PathVariable int movie_id , @RequestBody MovieReviewDTO review) {
		return movieReviewFacade.addMovieReview(user_id, movie_id, review);
	}
	
	@PutMapping("/movies/{id}")
	public MovieReview updateMovieReview (@PathVariable int id , @RequestBody MovieReviewDTO review) {
		return movieReviewFacade.updateMovieReview(id, review);
	}
	
	@DeleteMapping("/movies/{id}")
	public String deleteMovieReview(@PathVariable int id) {
		MovieReview theMovieReview = movieReviewFacade.findById(id);
			if(theMovieReview == null) {
				throw new RuntimeException("Movie is not found " + id);
			}
			return "Review deleted";
		}
}
