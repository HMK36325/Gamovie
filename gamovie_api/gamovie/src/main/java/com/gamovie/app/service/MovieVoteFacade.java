package com.gamovie.app.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamovie.app.entity.Movie;
import com.gamovie.app.entity.MovieVote;
import com.gamovie.app.entity.User;

@Service
public class MovieVoteFacade {
	
	@Autowired
	private MovieVoteService movieVoteService;
	
	@Autowired
	private MovieService movieService;
	
	@Autowired
	  private UserService userService;
	
	public MovieVote findById(int id) {
		return movieVoteService.findById(id);
	}
	
	public MovieVote addMovieVote(int user_id, int movie_id, int user_note) {
		User theUser= userService.findById(user_id);
		Movie theMovie= movieService.findById(movie_id);
		LocalDate voted_at= LocalDate.now();
		MovieVote theMovieVote= new MovieVote();
		theMovieVote.setMovie(theMovie);
		theMovieVote.setUser(theUser);
		theMovieVote.setVoted_at(voted_at);
		theMovieVote.setVote(user_note);
		movieVoteService.save(theMovieVote);
		return theMovieVote;
	}
	
	public void deleteById(int id) {
		movieVoteService.deleteBy(id);
	}
}
