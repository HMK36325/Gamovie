package com.gamovie.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamovie.app.entity.Movie;
import com.gamovie.app.entity.MovieReview;
import com.gamovie.app.entity.User;
import com.gamovie.app.repository.MovieReviewRepository;

@Service
public class MovieReviewServiceImpl implements MovieReviewService {

	@Autowired
	private MovieReviewRepository movieReviewRepository;

	@Override
	public MovieReview findById(int theId) {
		Optional<MovieReview> result = movieReviewRepository.findById(theId);
		if (result.isPresent()) {
			return result.get();
		} else {
			throw new RuntimeException("Did not found the vote with the id: " + theId);
		}
	}

	@Override
	public void save(MovieReview movieReview) {
		movieReviewRepository.save(movieReview);

	}

	@Override
	public void deletedById(int theId) {
		movieReviewRepository.deleteById(theId);

	}

	@Override
	public List<MovieReview> allReviewsByUser(User user) {

		List<MovieReview> result = movieReviewRepository.allReviewsByUser(user);

		if (!result.isEmpty()) {
			return result;
		} else {
			throw new RuntimeException("Did not found Reviews for this user");
		}
	}

	@Override
	public List<MovieReview> allReviewsByMovie(Movie movie) {
		List<MovieReview> result = movieReviewRepository.allReviewsByMovie(movie);

		if (!result.isEmpty()) {
			return result;
		} else {
			throw new RuntimeException("Did not found Reviews for this movie");
		}
	}

}
