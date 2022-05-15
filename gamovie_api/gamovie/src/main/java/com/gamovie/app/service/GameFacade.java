package com.gamovie.app.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.gamovie.app.dto.GameDTO;
import com.gamovie.app.entity.Game;

@Service
public class GameFacade {

	@Autowired
	GameService gameService;

	@Autowired
	private ModelMapper modelMapper;

	public List<GameDTO> getAllGames() {
		return gameService.findAll().stream().map(this::convertToGameDTO).collect(Collectors.toList());
	}

	public List<GameDTO> findByName(String name) {
		return gameService.findByName(name).stream().map(this::convertToGameDTO).collect(Collectors.toList());
	}

	public GameDTO findById(int id) {
		return convertToGameDTO(gameService.findById(id));
	}

	public Page<Game> getAllGamesByCategory(int offset, int pageSize, String cat) {
		return gameService.allGamesByCategory(pageSize, offset, cat);
	}

	public Page<Game> getGamesWithPagination(int offset, int pageSize) {
		return gameService.getGamesWithPagination(offset, pageSize);
	}

	public Game addGame(GameDTO gameDTO) {
		Game game = convertToGame(gameDTO);
		game.setDate(LocalDate.now());
		gameService.save(game);
		return game;
	}

	public void deleteById(int id) {
		gameService.deleteBy(id);
	}

	private GameDTO convertToGameDTO(Game game) {
		GameDTO gameDTO = modelMapper.map(game, GameDTO.class);
		return gameDTO;
	}

	public Game convertToGame(GameDTO gameDTO) {
		Game game = modelMapper.map(gameDTO, Game.class);
		return game;
	}
}
