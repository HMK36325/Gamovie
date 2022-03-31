package com.gamovie.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamovie.app.entity.MovieVote;
import com.gamovie.app.service.MovieVoteFacade;

@RestController
@RequestMapping("/movies-vote")
public class VotesController {

	@Autowired
	private MovieVoteFacade movieVoteFacade;

	@PostMapping("/{user_id}/{movie_id}")
	public MovieVote addMovieVote(@PathVariable int user_id, @PathVariable int movie_id, @RequestParam int user_note) {
		
		return movieVoteFacade.addMovieVote(user_id,movie_id,user_note);
		
	}

	@DeleteMapping("/{id}")
	public String deleteMovieVote(@PathVariable int id) {
		MovieVote theMovieVote = movieVoteFacade.findById(id);
		if (theMovieVote == null) {
			throw new RuntimeException("Movie is not found " + id);
		}
		movieVoteFacade.deleteById(id);
		return "Vote deleted";
	}
}
