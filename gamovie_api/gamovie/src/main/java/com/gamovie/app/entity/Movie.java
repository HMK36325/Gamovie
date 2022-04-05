package com.gamovie.app.entity;

import java.time.LocalDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * The Class Movie.
 */
@Entity
@Table(name = "movies")
public class Movie {

	/** The id. */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	/** The name. */
	@NotNull
	@Size(min = 3)
	@Column(name = "name")
	private String name;

	/** The director. */

	@NotNull
	@Size(min = 3)
	@Column(name = "director")
	private String director;

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

	/** The synopsis. */
	@NotNull
	@Size(min = 3)
	@Column(name = "synopsis")
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
	private int note;

	/** The date. */
	@Column(name = "date") // LocalDate date = LocalDate.now(); syso(date)=2021/03/05
	private LocalDate date;
	

	/**
	 * Instantiates a new movie.
	 */
	public Movie() {

	}

	/**
	 * Instantiates a new movie.
	 *
	 * @param name        the name
	 * @param director    the director
	 * @param year        the year
	 * @param category    the category
	 * @param distributor the distributor
	 * @param synopsis    the synopsis
	 * @param type        the type
	 * @param image       the image
	 * @param date        the date
	 */
	public Movie(String name, String director, String year, String category, String distributor, String synopsis,
			String image, long n_votes, int note, LocalDate date) {
		this.name = name;
		this.director = director;
		this.year = year;
		this.category = category;
		this.distributor = distributor;
		this.synopsis = synopsis;
		this.image = image;
		this.n_votes = n_votes;
		this.note = note;
		this.date = date;
	}

	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * Sets the id.
	 *
	 * @param id the new id
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * Gets the name.
	 *
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * Sets the name.
	 *
	 * @param name the new name
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * Gets the director.
	 *
	 * @return the director
	 */
	public String getDirector() {
		return director;
	}

	/**
	 * Sets the director.
	 *
	 * @param director the new director
	 */
	public void setDirector(String director) {
		this.director = director;
	}

	/**
	 * Gets the year.
	 *
	 * @return the year
	 */
	public String getYear() {
		return year;
	}

	/**
	 * Sets the year.
	 *
	 * @param year the new year
	 */
	public void setYear(String year) {
		this.year = year;
	}

	/**
	 * Gets the category.
	 *
	 * @return the category
	 */
	public String getCategory() {
		return category;
	}

	/**
	 * Sets the category.
	 *
	 * @param category the new category
	 */
	public void setCategory(String category) {
		this.category = category;
	}

	/**
	 * Gets the distributor.
	 *
	 * @return the distributor
	 */
	public String getDistributor() {
		return distributor;
	}

	/**
	 * Sets the distributor.
	 *
	 * @param distributor the new distributor
	 */
	public void setDistributor(String distributor) {
		this.distributor = distributor;
	}

	/**
	 * Gets the synopsis.
	 *
	 * @return the synopsis
	 */
	public String getSynopsis() {
		return synopsis;
	}

	/**
	 * Sets the synopsis.
	 *
	 * @param synopsis the new synopsis
	 */
	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	/**
	 * Gets the image.
	 *
	 * @return the image
	 */
	public String getImage() {
		return image;
	}

	/**
	 * Sets the image.
	 *
	 * @param image the new image
	 */
	public void setImage(String image) {
		this.image = image;
	}

	/**
	 * Gets the date.
	 *
	 * @return the date
	 */
	public LocalDate getDate() {
		return date;
	}

	/**
	 * Sets the date.
	 *
	 * @param date the new date
	 */
	public void setDate(LocalDate date) {
		this.date = date;
	}

	public long getN_votes() {
		return n_votes;
	}

	public void setN_votes(long n_votes) {
		this.n_votes = n_votes;
	}

	public int getNote() {
		return note;
	}

	public void setNote(int note) {
		this.note = note;
	}
	

}