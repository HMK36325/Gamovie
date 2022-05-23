package com.gamovie.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamovie.app.dto.GameVoteDTO;
import com.gamovie.app.dto.MovieVoteDTO;
import com.gamovie.app.entity.GameVote;
import com.gamovie.app.entity.MovieVote;
import com.gamovie.app.service.GameVoteFacade;
import com.gamovie.app.service.MovieVoteFacade;

@RestController
@RequestMapping("/votes")
public class VoteController {
	
	@Autowired
	private MovieVoteFacade movieVoteFacade;
	
	@Autowired 
	private GameVoteFacade gameVoteFacade;
	
	//MOVIES
	
	@GetMapping("/movies/user/{id}")
	@PreAuthorize("hasRole('USER')" + " || hasRole('ADMIN')")
	public List<MovieVote> getMovieVotesByUserList(@PathVariable int id) {
		return movieVoteFacade.allVotesByUserId(id);
	}
	
	
	@PostMapping("/movies/{user_id}/{movie_id}")
	@PreAuthorize("hasRole('USER')" + " || hasRole('ADMIN')")
	public MovieVoteDTO addMovieVote(@PathVariable int user_id, @PathVariable int movie_id, @RequestParam int user_note) {

		return movieVoteFacade.addMovieVote(user_id, movie_id, user_note);

	}
	
	@PutMapping("/movies/{id}")
	@PreAuthorize("hasRole('USER')" + " || hasRole('ADMIN')")
	public MovieVote updateMovieVote(@PathVariable int id, @RequestParam int user_note) {
		return movieVoteFacade.updateMovieVote(id, user_note);
	}

	@DeleteMapping("/movies/{id}")
	@PreAuthorize("hasRole('USER')" + " || hasRole('ADMIN')")
	public String deleteMovieVote(@PathVariable int id) {
		MovieVoteDTO theMovieVote = movieVoteFacade.findById(id);
		if (theMovieVote == null) {
			throw new RuntimeException("Vote is not found " + id);
		}
		movieVoteFacade.deleteById(id);
		return "Vote deleted";
	}
	
	//GAMES
	
	@GetMapping("/games/user/{id}")
	@PreAuthorize("hasRole('USER')" + " || hasRole('ADMIN')")
	public List<GameVote> getGameVotesByUserList(@PathVariable int id) {
		return gameVoteFacade.allVotesByUserId(id);
	}
	
	
	@PostMapping("/games/{user_id}/{game_id}")
	@PreAuthorize("hasRole('USER')" + " || hasRole('ADMIN')")
	public GameVoteDTO addGameVote(@PathVariable int user_id, @PathVariable int game_id, @RequestParam int user_note) {

		return gameVoteFacade.addGameVote(user_id, game_id, user_note);

	}
	
	@PutMapping("/games/{id}")
	@PreAuthorize("hasRole('USER')" + " || hasRole('ADMIN')")
	public GameVote updateGameVote(@PathVariable int id, @RequestParam int user_note) {
		return gameVoteFacade.updateGameVote(id, user_note);
	}

	@DeleteMapping("/games/{id}")
	@PreAuthorize("hasRole('USER')" + " || hasRole('ADMIN')")
	public String deleteGameVote(@PathVariable int id) {
		GameVoteDTO theGameVote = gameVoteFacade.findById(id);
		if (theGameVote == null) {
			throw new RuntimeException("Vote is not found " + id);
		}
		gameVoteFacade.deleteById(id);
		return "Vote deleted";
	}
}
