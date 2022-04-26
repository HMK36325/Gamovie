package com.gamovie.app.service;

import java.util.List;

import com.gamovie.app.entity.GameVote;
import com.gamovie.app.entity.User;

public interface GameVoteService {
	public GameVote findById(int id);

	public void save(GameVote gameVote);

	public void deleteBy(int id);

	List<GameVote> allVotesByUserId(User user);
}
