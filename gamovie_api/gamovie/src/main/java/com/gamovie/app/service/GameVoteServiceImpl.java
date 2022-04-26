package com.gamovie.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamovie.app.entity.GameVote;
import com.gamovie.app.entity.User;
import com.gamovie.app.repository.GameVoteRepository;

@Service
public class GameVoteServiceImpl implements GameVoteService {

	@Autowired
	GameVoteRepository gameVoteRepository;

	@Override
	public GameVote findById(int theId) {
		Optional<GameVote> result = gameVoteRepository.findById(theId);
		if (result.isPresent()) {
			return result.get();
		} else {
			throw new RuntimeException("Did not found the vote with the id: " + theId);
		}
	}

	@Override
	public void save(GameVote gameVote) {
		gameVoteRepository.save(gameVote);
	}

	@Override
	public void deleteBy(int id) {
		gameVoteRepository.deleteById(id);

	}

	@Override
	public List<GameVote> allVotesByUserId(User user) {
		List<GameVote> result = gameVoteRepository.allVotesByUserId(user);

		if (!result.isEmpty()) {
			return result;
		} else {
			throw new RuntimeException("Did not found votes for this user");
		}
	}

}
