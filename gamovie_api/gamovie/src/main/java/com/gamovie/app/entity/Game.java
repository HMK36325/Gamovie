package com.gamovie.app.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "games")
public class Game {
	/** The id. */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	/** The name. */
	@NotNull
	@Size(min = 3)
	@Column(name = "name", unique=true)
	private String name;
	
	/** The year. */
	@NotNull
	@Size(min = 3)
	@Column(name = "year")
	private String year;

	/** The category. */
	@NotNull
	@Size(min = 3)
	@Column(name = "category")
	private String category;

	/** The distributor. */
	@NotNull
	@Size(min = 3)
	@Column(name = "distributor")
	private String distributor;
	
	@NotNull
	@Size(min = 3)
	@Column(name = "synopsis", length = 1500)
	private String synopsis;
	
	/** The image. */
	@NotNull
	@Column(name = "image_address")
	private String image;
	
	/** The votes. */
	@NotNull
	@Column(name = "n_votes")
	private long n_votes;

	/** The note. */
	@NotNull
	@Column(name = "note")
	private double note;

	/** The date. */
	@Column(name = "date") // LocalDate date = LocalDate.now(); syso(date)=2021/03/05
	private LocalDate date;
	
	@NotNull
	@Size(min = 3)
	@Column(name = "content")
	private String content;
	
	public Game(int id, @NotNull @Size(min = 3) String name, @NotNull @Size(min = 3) String year,
			@NotNull @Size(min = 3) String category, @NotNull @Size(min = 3) String distributor, @NotNull @Size(min = 3) String synopsis, @NotNull String image,
			@NotNull long n_votes, @NotNull double note, LocalDate date, @NotNull @Size(min = 3) String content) {

		this.id = id;
		this.name = name;
		this.year = year;
		this.category = category;
		this.distributor = distributor;
		this.synopsis = synopsis;
		this.image = image;
		this.n_votes = n_votes;
		this.note = note;
		this.date = date;
		this.content = content;
	}

	public Game() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDistributor() {
		return distributor;
	}

	public void setDistributor(String distributor) {
		this.distributor = distributor;
	}

	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public long getN_votes() {
		return n_votes;
	}

	public void setN_votes(long n_votes) {
		this.n_votes = n_votes;
	}

	public double getNote() {
		return note;
	}

	public void setNote(double note) {
		this.note = note;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	
}
