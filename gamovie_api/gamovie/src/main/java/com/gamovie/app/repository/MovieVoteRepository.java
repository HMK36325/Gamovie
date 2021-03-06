package com.gamovie.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gamovie.app.entity.MovieVote;
import com.gamovie.app.entity.User;

@Repository
public interface MovieVoteRepository extends JpaRepository<MovieVote, Integer> {
	
    @Query("select v from MovieVote v where v.user like ?1")
    List<MovieVote> allVotesByUserId(User user);
}
