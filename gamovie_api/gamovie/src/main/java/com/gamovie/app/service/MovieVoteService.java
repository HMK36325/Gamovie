package com.gamovie.app.service;


import com.gamovie.app.entity.MovieVote;

public interface MovieVoteService {
	
	public MovieVote findById(int theId);

	public void save(MovieVote movieVote);

	public void deleteBy(int id);
}
