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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamovie.app.dto.MovieDTO;
import com.gamovie.app.dto.MovieVoteDTO;
import com.gamovie.app.entity.Movie;
import com.gamovie.app.entity.MovieVote;
import com.gamovie.app.service.MovieFacade;
import com.gamovie.app.service.MovieVoteFacade;

@RestController
@RequestMapping("/movies")
public class MovieController {

	@Autowired
	private MovieFacade movieFacade;

	@Autowired
	private MovieVoteFacade movieVoteFacade;

	@GetMapping()
	public List<MovieDTO> getMovieDTOList() {
		return movieFacade.getAllMovies();
	}

	@GetMapping("/{id}")
	public MovieDTO getMovieDTO(@PathVariable int id) {
		return movieFacade.findById(id);
	}

	@PostMapping()
	public Movie addMovie(@RequestBody MovieDTO moviedto) {
		Movie movie = movieFacade.addMovie(moviedto);
		return movie;
	}
	
	@PutMapping()
	public Movie updateMovie(@RequestBody MovieDTO moviedto) {
		Movie movie = movieFacade.addMovie(moviedto);
		return movie;
	}

	@DeleteMapping("/{id}")
	public String deleteMovie(@PathVariable int id) {
		MovieDTO theMovie = movieFacade.findById(id);
		if (theMovie == null) {
			throw new RuntimeException("Movie is not found " + id);
		}
		movieFacade.deleteById(id);
		return "Movie deleted";
	}
	
	@GetMapping("/votes/user/{id}")
	public List<MovieVote> getMovieVotesDTOList(@PathVariable int id) {
		return movieVoteFacade.allVotesByUserId(id);
	}
	
	
	@PostMapping("/votes/{user_id}/{movie_id}")
	public MovieVote addMovieVote(@PathVariable int user_id, @PathVariable int movie_id, @RequestParam int user_note) {

		return movieVoteFacade.addMovieVote(user_id, movie_id, user_note);

	}
	
	@PutMapping("/votes/{id}")
	public MovieVote updateMovieVote(@PathVariable int id, @RequestParam int user_note) {
		return movieVoteFacade.updateMovieVote(id, user_note);
	}

	@DeleteMapping("/votes/{id}")
	public String deleteMovieVote(@PathVariable int id) {
		MovieVoteDTO theMovieVote = movieVoteFacade.findById(id);
		if (theMovieVote == null) {
			throw new RuntimeException("Movie is not found " + id);
		}
		movieVoteFacade.deleteById(id);
		return "Vote deleted";
	}
}
