package com.gamovie.app.repository;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gamovie.app.entity.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

	@Query("select m from Movie m where m.name like %?1%")
	List<Movie> findByName(String name);

	@Query("select m from Movie m where m.category like %?1%")
	Page<Movie> allMoviesByCategory(String cat, Pageable pageable);
	
	@Transactional
	@Modifying
	@Query("delete from MovieVote v where v.movie like ?1")
	void deleteMovieVotes(Movie movie);
	
	@Transactional
	@Modifying
	@Query("delete from MovieReview r where r.movie like ?1")
	void deleteMovieReviews(Movie movie);
	
}
