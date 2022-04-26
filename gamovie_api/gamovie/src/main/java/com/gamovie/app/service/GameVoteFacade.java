package com.gamovie.app.service;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamovie.app.dto.GameVoteDTO;
import com.gamovie.app.entity.Game;
import com.gamovie.app.entity.GameVote;
import com.gamovie.app.entity.User;

@Service
public class GameVoteFacade {

	@Autowired
	private GameVoteService gameVoteService;

	@Autowired
	private GameService gameService;

	@Autowired
	private UserService userService;

	@Autowired
	private ModelMapper modelMapper;

	public GameVoteDTO findById(int id) {
		return convertToGameVoteDTO(gameVoteService.findById(id));
	}

	public List<GameVote> allVotesByUserId(int id) {
		User user = userService.findById(id);
		return gameVoteService.allVotesByUserId(user);
	}

	public GameVote addGameVote(int user_id, int game_id, int user_note) {
		User theUser = userService.findById(user_id);
		Game theGame = gameService.findById(game_id);
		long n_votes = theGame.getN_votes();
		double note = theGame.getNote();
		theGame.setN_votes(n_votes + 1);
		double new_note = (n_votes * note + user_note) / (n_votes + 1);
		theGame.setNote((double) Math.round(new_note * 10) / 10);
		LocalDate voted_at = LocalDate.now();
		GameVote theGameVote = new GameVote();
		theGameVote.setGame(theGame);
		theGameVote.setUser(theUser);
		theGameVote.setVoted_at(voted_at);
		theGameVote.setVote(user_note);
		gameVoteService.save(theGameVote);
		return theGameVote;
	}

	public GameVote updateGameVote(int id, int user_note) {
		GameVote theGameVote = gameVoteService.findById(id);
		theGameVote.setVote(user_note);
		gameVoteService.save(theGameVote);
		return theGameVote;
	}

	public void deleteById(int id) {
		gameVoteService.deleteBy(id);
	}

	private GameVoteDTO convertToGameVoteDTO(GameVote gameVote) {
		GameVoteDTO gameVoteDto = modelMapper.map(gameVote, GameVoteDTO.class);
		return gameVoteDto;
	}

	public GameVote convertToGameVote(GameVoteDTO gameVoteDTO) {
		GameVote gameVote = modelMapper.map(gameVoteDTO, GameVote.class);
		return gameVote;
	}
}
