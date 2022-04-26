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

import com.gamovie.app.dto.GameDTO;
import com.gamovie.app.entity.Game;
import com.gamovie.app.service.GameFacade;

@RestController
@RequestMapping("/games")
public class GameController {

	@Autowired
	private GameFacade gameFacade;

	@GetMapping()
	public List<GameDTO> getGameDTOList() {
		return gameFacade.getAllGames();
	}

	@GetMapping("/{id}")
	public GameDTO getGameDTO(@PathVariable int id) {
		return gameFacade.findById(id);
	}

	@PostMapping()
	public Game addGame(@RequestBody GameDTO gameDTO) {
		Game game = gameFacade.addGame(gameDTO);
		return game;
	}

	@PutMapping()
	public Game updateGame(@RequestBody GameDTO gameDTO) {
		Game game = gameFacade.addGame(gameDTO);
		return game;
	}

	@DeleteMapping("/{id}")
	public String deleteGame(@PathVariable int id) {
		GameDTO theGame = gameFacade.findById(id);
		if (theGame == null) {
			throw new RuntimeException("Movie is not found " + id);
		}
		gameFacade.deleteById(id);
		return "Game deleted";
	}
}
