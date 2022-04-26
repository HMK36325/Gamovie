package com.gamovie.app.service;

import java.util.List;

import com.gamovie.app.entity.Game;
import com.gamovie.app.entity.GameReview;
import com.gamovie.app.entity.User;

public interface GameReviewService {
	
	public GameReview findById(int theId);

	public void save(GameReview gameReview);

	public void deleteById(int theId);

	List<GameReview> allReviewsByUser(User user);

	List<GameReview> allReviewsByGame(Game game);
}
