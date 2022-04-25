package com.gamovie.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamovie.app.dto.MovieVoteDTO;
import com.gamovie.app.entity.MovieVote;
import com.gamovie.app.service.MovieVoteFacade;

@RestController
@RequestMapping("/votes")
public class VoteController {
	
	@Autowired
	private MovieVoteFacade movieVoteFacade;
	
	@GetMapping("/movies/user/{id}")
	public List<MovieVote> getMovieVotesByUserList(@PathVariable int id) {
		return movieVoteFacade.allVotesByUserId(id);
	}
	
	
	@PostMapping("/movies/{user_id}/{movie_id}")
	public MovieVote addMovieVote(@PathVariable int user_id, @PathVariable int movie_id, @RequestParam int user_note) {

		return movieVoteFacade.addMovieVote(user_id, movie_id, user_note);

	}
	
	@PutMapping("/movies/{id}")
	public MovieVote updateMovieVote(@PathVariable int id, @RequestParam int user_note) {
		return movieVoteFacade.updateMovieVote(id, user_note);
	}

	@DeleteMapping("/movies/{id}")
	public String deleteMovieVote(@PathVariable int id) {
		MovieVoteDTO theMovieVote = movieVoteFacade.findById(id);
		if (theMovieVote == null) {
			throw new RuntimeException("Movie is not found " + id);
		}
		movieVoteFacade.deleteById(id);
		return "Vote deleted";
	}
}
