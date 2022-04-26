package com.gamovie.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gamovie.app.entity.Movie;
import com.gamovie.app.entity.MovieReview;
import com.gamovie.app.entity.User;

@Repository
public interface MovieReviewRepository extends JpaRepository<MovieReview, Integer> {
	
	@Query("select r from MovieReview r where r.user like ?1")
	List<MovieReview> allReviewsByUser(User user);
	
	@Query("select r from MovieReview r where r.movie like ?1")
	List<MovieReview> allReviewsByMovie(Movie movie);

}
