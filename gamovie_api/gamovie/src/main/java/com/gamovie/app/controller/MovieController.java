package com.gamovie.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.gamovie.app.dto.MovieDTO;
import com.gamovie.app.entity.Movie;
import com.gamovie.app.service.MovieFacade;

@RestController
@RequestMapping("/movies")
public class MovieController {

	@Autowired
	private MovieFacade movieFacade;

	@GetMapping()
	public List<MovieDTO> getMovieDTOList() {
		return movieFacade.getAllMovies();
	}

	@GetMapping("/{id}")
	public MovieDTO getMovieDTO(@PathVariable int id) {
		return movieFacade.findById(id);
	}

	@PostMapping()
	public Movie addMovie(@RequestBody MovieDTO moviedto) {
		Movie movie = movieFacade.addMovie(moviedto);
		return movie;
	}
	
	@PutMapping()
	public Movie updateMovie(@RequestBody MovieDTO moviedto) {
		Movie movie = movieFacade.addMovie(moviedto);
		return movie;
	}

	@DeleteMapping("/{id}")
	public String deleteMovie(@PathVariable int id) {
		MovieDTO theMovie = movieFacade.findById(id);
		if (theMovie == null) {
			throw new RuntimeException("Movie is not found " + id);
		}
		movieFacade.deleteById(id);
		return "Movie deleted";
	}
	
}
