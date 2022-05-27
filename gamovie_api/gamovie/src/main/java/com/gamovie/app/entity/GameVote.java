package com.gamovie.app.entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "game_votes", uniqueConstraints = { @UniqueConstraint(columnNames = { "game_id", "user_id" }) })
public class GameVote {
	/** The id. */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	/** The movie_id. */
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "game_id")
	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	private Game game;

	/** The user_id. */
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	private User user;

	/** The vote. */
	@Column(name = "note")
	private float note;

	/** The voted_at. */
	@Column(name = "voted_at")
	private LocalDate voted_at;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public float getVote() {
		return note;
	}

	public void setVote(float note) {
		this.note = note;
	}

	public LocalDate getVoted_at() {
		return voted_at;
	}

	public void setVoted_at(LocalDate voted_at) {
		this.voted_at = voted_at;
	}

}
