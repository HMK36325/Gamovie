package com.gamovie.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gamovie.app.entity.GameVote;
import com.gamovie.app.entity.User;

@Repository
public interface GameVoteRepository extends JpaRepository<GameVote, Integer> {
	 @Query("select v from GameVote v where v.user like ?1")
	    List<GameVote> allVotesByUserId(User user);

}
