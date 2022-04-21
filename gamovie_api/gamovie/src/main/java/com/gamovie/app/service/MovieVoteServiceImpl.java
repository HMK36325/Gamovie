package com.gamovie.app.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamovie.app.entity.MovieVote;
import com.gamovie.app.entity.User;
import com.gamovie.app.repository.MovieVoteRepository;

@Service
public class MovieVoteServiceImpl implements MovieVoteService {
	
	@Autowired
	private MovieVoteRepository movieVoteRepository;

	@Override
	public MovieVote findById(int theId) {
		Optional<MovieVote>result=movieVoteRepository.findById(theId);
		if(result.isPresent()) {
			return result.get();
		}
		else {
			throw new RuntimeException("Did not found LIST OF VOTES WITH ID: "+theId);
		}
	}

	@Override
	public void save(MovieVote movieVote) {
		movieVoteRepository.save(movieVote);
		
	}

	@Override
	public void deleteBy(int id) {
		movieVoteRepository.deleteById(id);
		
	}

	@Override
	public List<MovieVote> allVotesByUserId(User user) {
		
		return movieVoteRepository.allVotesByUserId(user);
	}

}
