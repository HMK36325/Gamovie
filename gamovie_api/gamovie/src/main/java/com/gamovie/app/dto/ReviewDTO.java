package com.gamovie.app.dto;

import java.time.LocalDate;

public class ReviewDTO {
	private int id;
	private String review;
	private LocalDate reviewed_at;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	public LocalDate getReviewed_at() {
		return reviewed_at;
	}
	public void setReviewed_at(LocalDate reviewed_at) {
		this.reviewed_at = reviewed_at;
	}
	
	
}
