package com.gamovie.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamovie.app.entity.MovieVote;


public interface MovieVoteRepository extends JpaRepository<MovieVote, Integer> {

}
