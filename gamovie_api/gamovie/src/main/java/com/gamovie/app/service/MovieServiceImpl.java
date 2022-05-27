package com.gamovie.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.gamovie.app.entity.Movie;
import com.gamovie.app.repository.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService {

	@Autowired
	private MovieRepository movieRepository;

	@Override
	public List<Movie> findAll() {
		// TODO Auto-generated method stub
		return movieRepository.findAll();
	}

	@Override
	public Movie findById(int theId) {
		Optional<Movie> result = movieRepository.findById(theId);
		if (result.isPresent()) {
			return result.get();
		} else {
			throw new RuntimeException("Did not found movie id: " + theId);
		}
	}

	@Override
	public void save(Movie theMovie) {
		movieRepository.save(theMovie);

	}

	@Override
	public void deleteBy(int theId) {
		movieRepository.deleteById(theId);
	}

	@Override
	public Page<Movie> allMoviesByCategory (int offset, int pageSize, String cat) {
		Pageable pageable = PageRequest.of(offset, pageSize).withSort(Sort.by("name"));
		Page<Movie> result = movieRepository.allMoviesByCategory(cat, pageable);
		if (!result.isEmpty()) {
			return result;
		} else {
			throw new RuntimeException("Did not found movies for that Category");
		}
	}

	@Override
	public List<Movie> findByName(String name) {
		List<Movie> result = movieRepository.findByName(name);
		if (!result.isEmpty()) {
			return result;
		} else {
			throw new RuntimeException("Did not found movies for that name");
		}
	}

	@Override
	public Page<Movie> getMoviesWithPagination(int offset, int pageSize) {
		Page<Movie> movies = movieRepository.findAll(PageRequest.of(offset, pageSize).withSort(Sort.by("name")));
		if (!movies.isEmpty()) {
			return movies;
		} else {
			throw new RuntimeException("Did not found movies");
		}
	}

	@Override
	public void deleteAllGameVotes(Movie movie) {
		movieRepository.deleteMovieVotes(movie);
		movieRepository.deleteMovieReviews(movie);
		
	}

}
