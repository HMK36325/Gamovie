package com.gamovie.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

	@Override
	public Page<Game> allGamesByCategory(int offset, int pageSize, String cat) {
		Pageable pageable = PageRequest.of(offset, pageSize).withSort(Sort.by("name"));
		Page<Game> result = gameRepository.allGamesByCategory(cat, pageable);
		if (!result.isEmpty()) {
			return result;
		} else {
			throw new RuntimeException("Did not found games for that Category");
		}
	}

	@Override
	public List<Game> findByName(String name) {
		List<Game> result = gameRepository.findByName(name);
		if (!result.isEmpty()) {
			return result;
		} else {
			throw new RuntimeException("Did not found games for that name");
		}
	}

	@Override
	public Page<Game> getGamesWithPagination(int offset, int pageSize) {
		Page<Game> games = gameRepository.findAll(PageRequest.of(offset, pageSize).withSort(Sort.by("name")));
		if (!games.isEmpty()) {
			return games;
		} else {
			throw new RuntimeException("Did not found games");
		}
	}

	@Override
	public void deleteGameVotesReviews(Game game) {
		gameRepository.deleteGameReview(game);
		gameRepository.deleteGameVotes(game);
		
	}

}
