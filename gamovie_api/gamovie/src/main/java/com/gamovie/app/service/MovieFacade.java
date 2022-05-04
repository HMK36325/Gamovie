package com.gamovie.app.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamovie.app.dto.MovieDTO;
import com.gamovie.app.entity.Movie;

@Service
public class MovieFacade {

	@Autowired
	private MovieService movieService;

	@Autowired
	private ModelMapper modelMapper;

	public List<MovieDTO> getAllMovies() {
		return movieService.findAll().stream().map(this::convertToMovieDTO).collect(Collectors.toList());
	}

	public MovieDTO findById(int id) {
		return convertToMovieDTO(movieService.findById(id));
	}

	public List<MovieDTO> allMoviesByCategory(String cat) {
		return movieService.allMoviesByCategory(cat).stream().map(this::convertToMovieDTO).collect(Collectors.toList());
	}

	public Movie addMovie(MovieDTO moviedto) {
		Movie movie = convertToMovie(moviedto);
		movie.setDate(LocalDate.now());
		movieService.save(movie);
		return movie;
	}

	public void deleteById(int id) {
		movieService.deleteBy(id);
	}

	private MovieDTO convertToMovieDTO(Movie movie) {
		MovieDTO movieDto = modelMapper.map(movie, MovieDTO.class);
		return movieDto;
	}

	public Movie convertToMovie(MovieDTO movieDTO) {
		Movie movie = modelMapper.map(movieDTO, Movie.class);
		return movie;
	}
}
