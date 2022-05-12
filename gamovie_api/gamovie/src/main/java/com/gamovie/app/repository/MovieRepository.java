package com.gamovie.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gamovie.app.entity.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
	
	 @Query("select m from Movie m where m.category like ?1")
	 List<Movie> allMoviesByCategory(String cat);
	 
	 @Query("select m from Movie m where m.name like %?1%")
	 List<Movie> findByName(String name);
}
