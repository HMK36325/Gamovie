package com.gamovie.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamovie.app.entity.Game;
import com.gamovie.app.entity.GameReview;
import com.gamovie.app.entity.User;
import com.gamovie.app.repository.GameReviewRepository;

@Service
public class GameReviewServiceImpl implements GameReviewService {

	@Autowired
	private GameReviewRepository gameReviewRepository;

	@Override
	public GameReview findById(int theId) {
		Optional<GameReview> result = gameReviewRepository.findById(theId);
		if (result.isPresent()) {
			return result.get();
		} else {
			throw new RuntimeException("Did not found the Review with the id: " + theId);
		}
	}

	@Override
	public void save(GameReview gameReview) {
		gameReviewRepository.save(gameReview);

	}

	@Override
	public void deleteById(int theId) {
		gameReviewRepository.deleteById(theId);

	}

	@Override
	public List<GameReview> allReviewsByUser(User user) {
		
		List<GameReview> result = gameReviewRepository.allReviewsByUser(user);

		if (!result.isEmpty()) {
			return result;
		} else {
			throw new RuntimeException("Did not found Reviews for this user");
		}
	}

	@Override
	public List<GameReview> allReviewsByGame(Game game) {
		List<GameReview> result = gameReviewRepository.allReviewsByGame(game);

		if (!result.isEmpty()) {
			return result;
		} else {
			throw new RuntimeException("Did not found Reviews for this game");
		}
	}

}
