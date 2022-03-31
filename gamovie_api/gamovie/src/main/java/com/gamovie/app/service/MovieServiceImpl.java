package com.gamovie.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
		Optional<Movie>result=movieRepository.findById(theId);
		if(result.isPresent()) {
			return result.get();
		}
		else {
			throw new RuntimeException("Did not found movie id: "+theId);
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

}
