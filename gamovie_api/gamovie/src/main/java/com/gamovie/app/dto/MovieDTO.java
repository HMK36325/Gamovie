package com.gamovie.app.dto;


public class MovieDTO {
	private int id;
	private String name;
	private String director;
	private String year;
	private String category;
	private String distributor;
	private String synopsis;
	private String image;
	private long n_votes;
	private int note;
	
	public int getId() {
		return id;
	}
	public void setId(int i) {
		this.id = i;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
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
	public int getNote() {
		return note;
	}
	public void setNote(int note) {
		this.note = note;
	}

	

}
