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

import com.gamovie.app.dto.ReviewDTO;
import com.gamovie.app.entity.GameReview;
import com.gamovie.app.entity.MovieReview;
import com.gamovie.app.service.GameReviewFacade;
import com.gamovie.app.service.MovieReviewFacade;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

	@Autowired
	private MovieReviewFacade movieReviewFacade;

	@Autowired
	private GameReviewFacade gameReviewFacade;

	// MOVIES

	@GetMapping("/movies/user/{id}")
	public List<MovieReview> getMovieReviewsByUser(@PathVariable int id) {
		return movieReviewFacade.allReviewsByUser(id);
	}

	@GetMapping("/movies/movie/{id}")
	public List<MovieReview> getMovieReviewsByMovie(@PathVariable int id) {
		return movieReviewFacade.allReviewsByMovie(id);
	}

	@PostMapping("/movies/{user_id}/{movie_id}")
	@PreAuthorize("hasRole('PREMIUM')" + " || hasRole('ADMIN')")
	public MovieReview addMovieReview(@PathVariable int user_id, @PathVariable int movie_id,
			@RequestBody ReviewDTO review) {
		return movieReviewFacade.addMovieReview(user_id, movie_id, review);
	}

	@PutMapping("/movies/{id}")
	@PreAuthorize("hasRole('PREMIUM')" + " || hasRole('ADMIN')")
	public MovieReview updateMovieReview(@PathVariable int id, @RequestBody ReviewDTO review) {
		return movieReviewFacade.updateMovieReview(id, review);
	}

	@DeleteMapping("/movies/{id}")
	@PreAuthorize("hasRole('PREMIUM')" + " || hasRole('ADMIN')")
	public String deleteMovieReview(@PathVariable int id) {
		MovieReview theMovieReview = movieReviewFacade.findById(id);
		if (theMovieReview == null) {
			throw new RuntimeException("Movie is not found " + id);
		}
		movieReviewFacade.deleteById(id);
		return "Review deleted";
	}

	// GAMES

	@GetMapping("/games/user/{id}")
	public List<GameReview> getGameReviewsByUser(@PathVariable int id) {
		return gameReviewFacade.allReviewsByUser(id);
	}

	@GetMapping("/games/game/{id}")
	public List<GameReview> getGameReviewsByGame(@PathVariable int id) {
		return gameReviewFacade.allReviewsByGame(id);
	}

	@PostMapping("/games/{user_id}/{game_id}")
	@PreAuthorize("hasRole('PREMIUM')" + " || hasRole('ADMIN')")
	public GameReview addGameReview(@PathVariable int user_id, @PathVariable int game_id,
			@RequestBody ReviewDTO review) {
		return gameReviewFacade.addGameReview(user_id, game_id, review);
	}

	@PutMapping("/games/{id}")
	@PreAuthorize("hasRole('PREMIUM')" + " || hasRole('ADMIN')")
	public GameReview updateGameReview(@PathVariable int id, @RequestBody ReviewDTO review) {
		return gameReviewFacade.updateGameReview(id, review);
	}

	@DeleteMapping("/games/{id}")
	@PreAuthorize("hasRole('PREMIUM')" + " || hasRole('ADMIN')")
	public String deleteGameReview(@PathVariable int id) {
		GameReview theGameReview = gameReviewFacade.findById(id);
		if (theGameReview == null) {
			throw new RuntimeException("Game is not found " + id);
		}
		gameReviewFacade.deleteById(id);
		return "Review deleted";
	}
}
