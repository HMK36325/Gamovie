package com.gamovie.app.dto;

import java.time.LocalDate;

import com.gamovie.app.entity.Movie;


public class MovieVoteDTO {
	private int id;
	private int user_id;
	private Movie movie;
	private float note;
	private LocalDate voted_at;
	
	public MovieVoteDTO() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public float getNote() {
		return note;
	}

	public void setNote(float note) {
		this.note = note;
	}

	public LocalDate getVoted_at() {
		return voted_at;
	}

	public void setVoted_at(LocalDate voted_at) {
		this.voted_at = voted_at;
	}
	
	
	
	
	
	
	
}
