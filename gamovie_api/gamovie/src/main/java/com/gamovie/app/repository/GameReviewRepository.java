package com.gamovie.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gamovie.app.entity.Game;
import com.gamovie.app.entity.GameReview;
import com.gamovie.app.entity.User;

@Repository
public interface GameReviewRepository extends JpaRepository<GameReview, Integer> {

	@Query("select r from GameReview r where r.user like ?1")
	List<GameReview> allReviewsByUser(User user);

	@Query("select r from GameReview r where r.game like ?1")
	List<GameReview> allReviewsByGame(Game game);

}
