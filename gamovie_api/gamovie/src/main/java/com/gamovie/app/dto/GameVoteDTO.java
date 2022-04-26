package com.gamovie.app.dto;

import java.time.LocalDate;

import com.gamovie.app.entity.Game;
import com.gamovie.app.entity.User;

public class GameVoteDTO {
	private int id;
	private User user;
	private Game game;
	private int note;
	private LocalDate voted_at;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Game getMovie() {
		return game;
	}

	public void setMovie(Game game) {
		this.game = game;
	}

	public int getNote() {
		return note;
	}

	public void setNote(int note) {
		this.note = note;
	}

	public LocalDate getVoted_at() {
		return voted_at;
	}

	public void setVoted_at(LocalDate voted_at) {
		this.voted_at = voted_at;
	}
}
