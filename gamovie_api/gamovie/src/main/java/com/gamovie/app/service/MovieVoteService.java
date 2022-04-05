package com.gamovie.app.service;


import java.util.List;

import com.gamovie.app.entity.MovieVote;
import com.gamovie.app.entity.User;

public interface MovieVoteService {
	
	public MovieVote findById(int theId);

	public void save(MovieVote movieVote);

	public void deleteBy(int id);
	
	List<MovieVote> allVotesByUserId(User user);
}
