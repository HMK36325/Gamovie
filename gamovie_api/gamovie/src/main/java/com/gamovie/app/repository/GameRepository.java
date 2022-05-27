package com.gamovie.app.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gamovie.app.entity.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Integer> {
	
	@Query("select g from Game g where g.category like %?1%")
	Page<Game> allGamesByCategory(String cat, Pageable pageable);
	
	@Query("select g from Game g where g.name like %?1%")
	List<Game> findByName(String name);
	
	@Transactional
	@Modifying
	@Query("delete from GameVote v where v.game like ?1")
	void deleteGameVotes(Game game);
	
	@Transactional
	@Modifying
	@Query("delete from GameReview r where r.game like ?1")
	void deleteGameReview(Game game);
}
