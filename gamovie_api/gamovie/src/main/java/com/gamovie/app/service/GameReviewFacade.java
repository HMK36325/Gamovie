package com.gamovie.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamovie.app.dto.ReviewDTO;
import com.gamovie.app.entity.Game;
import com.gamovie.app.entity.GameReview;
import com.gamovie.app.entity.User;

@Service
public class GameReviewFacade {
	@Autowired
	private GameReviewService gameReviewService;

	@Autowired
	private GameService gameService;

	@Autowired
	private UserService userService;

	public GameReview findById(int id) {
		return gameReviewService.findById(id);
	}

	public List<GameReview> allReviewsByUser(int id) {
		User user = userService.findById(id);
		return gameReviewService.allReviewsByUser(user);
	}

	public List<GameReview> allReviewsByGame(int id) {
		Game game = gameService.findById(id);
		return gameReviewService.allReviewsByGame(game);
	}

	public GameReview addGameReview(int user_id, int game_id, ReviewDTO review) {
		User theUser = userService.findById(user_id);
		Game theGame = gameService.findById(game_id);
		GameReview theGameReview = new GameReview();
		LocalDate reviewed_at = LocalDate.now();
		theGameReview.setReview(review.getReview());
		theGameReview.setGame(theGame);
		theGameReview.setUser(theUser);
		theGameReview.setReviewed_at(reviewed_at);
		gameReviewService.save(theGameReview);
		theGameReview.getUser().setPassword(null);
		theGameReview.getUser().setEmail(null);
		return theGameReview;
	}

	public GameReview updateGameReview(int id, ReviewDTO review) {
		GameReview theGameReview = gameReviewService.findById(id);
		theGameReview.setReview(review.getReview());
		gameReviewService.save(theGameReview);
		theGameReview.getUser().setPassword(null);
		theGameReview.getUser().setEmail(null);
		return theGameReview;
	}

	public void deleteById(int id) {
		gameReviewService.deleteById(id);
	}
}
