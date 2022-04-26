package com.gamovie.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamovie.app.entity.Game;
import com.gamovie.app.repository.GameRepository;

@Service
public class GameServiceImpl implements GameService {

	@Autowired
	GameRepository gameRepository;

	@Override
	public List<Game> findAll() {
		return gameRepository.findAll();
	}

	@Override
	public Game findById(int id) {
		Optional<Game> result = gameRepository.findById(id);
		if (result.isPresent()) {
			return result.get();
		} else {
			throw new RuntimeException("Did not found game id: " + id);
		}
	}

	@Override
	public void save(Game theGame) {
		gameRepository.save(theGame);

	}

	@Override
	public void deleteBy(int theId) {
		gameRepository.deleteById(theId);

	}

}
