package com.gamovie.app.service;


import java.time.LocalDate;
import java.util.List;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.gamovie.app.dto.MovieVoteDTO;
import com.gamovie.app.entity.Movie;
import com.gamovie.app.entity.MovieVote;
import com.gamovie.app.entity.User;

@Service
public class MovieVoteFacade {
	
	@Autowired
	private MovieVoteService movieVoteService;
	
	@Autowired
	private MovieService movieService;
	
	@Autowired
	  private UserService userService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	public MovieVoteDTO findById(int id) {
		return convertToMovieVoteDTO(movieVoteService.findById(id));
	}
	
	public List<MovieVote> allVotesByUserId(int id) {
		User user= userService.findById(id);
		return movieVoteService.allVotesByUserId(user);
	}
	
	public MovieVoteDTO addMovieVote(int user_id, int movie_id, int user_note) {
		User theUser= userService.findById(user_id);
		Movie theMovie= movieService.findById(movie_id);
		long n_votes= theMovie.getN_votes();
		double note = theMovie.getNote();
		theMovie.setN_votes(n_votes+1);
		double new_note=(n_votes*note+user_note)/(n_votes+1);
		theMovie.setNote((double)Math.round(new_note *10)/10);
		LocalDate voted_at= LocalDate.now();
		MovieVote theMovieVote= new MovieVote();
		theMovieVote.setMovie(theMovie);
		theMovieVote.setUser(theUser);
		theMovieVote.setVoted_at(voted_at);
		theMovieVote.setVote(user_note);
		movieVoteService.save(theMovieVote);
		return convertToMovieVoteDTO(theMovieVote);
	}
	
	public MovieVote updateMovieVote(int id, int user_note) {
		MovieVote theMovieVote= movieVoteService.findById(id);
		theMovieVote.setVote(user_note);
		movieVoteService.save(theMovieVote);
		return theMovieVote;
	}
	
	public void deleteById(int id) {
		movieVoteService.deleteBy(id);
	}
	
	private MovieVoteDTO convertToMovieVoteDTO(MovieVote movieVote) {
		MovieVoteDTO movieVoteDto = new MovieVoteDTO();
		movieVoteDto.setId(movieVote.getId());
		movieVoteDto.setMovie(movieVote.getMovie());
		movieVoteDto.setNote(movieVote.getVote());
		movieVoteDto.setUser_id(movieVote.getUser().getId());
		movieVoteDto.setVoted_at(movieVote.getVoted_at());
		
		return movieVoteDto;
	}

	public MovieVote convertToMovieVote(MovieVoteDTO movieVoteDTO) {
		MovieVote movieVote = modelMapper.map(movieVoteDTO, MovieVote.class);
		return movieVote;
	}
}
