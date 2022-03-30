package com.gamovie.app.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * The Class User.
 */
@Entity
@Table(name = "users")
public class User {

	/** The id. */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	/** The name. */
	@Column(name = "name")
	private String name;

	/** The last name. */
	@Column(name = "last_name")
	private String last_name;

	/** The email. */
	@Column(name = "email")
	private String email;

	/** The password. */
	@Column(name = "password")
	private String password;

	@OneToMany(mappedBy = "user")
	private Set<Vote> votes;

	/**
	 * Instantiates a new user.
	 */
	public User() {

	}

	/**
	 * Instantiates a new user.
	 *
	 * @param name      the name
	 * @param last_name the last name
	 * @param email     the email
	 * @param password  the password
	 */
	public User(String name, String last_name, String email, String password) {
		this.name = name;
		this.last_name = last_name;
		this.email = email;
		this.password = password;
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
	 * Gets the last name.
	 *
	 * @return the last name
	 */
	public String getlast_name() {
		return last_name;
	}

	/**
	 * Sets the last name.
	 *
	 * @param last_name the new last name
	 */
	public void setlast_name(String last_name) {
		this.last_name = last_name;
	}

	/**
	 * Gets the email.
	 *
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * Sets the email.
	 *
	 * @param email the new email
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * Gets the password.
	 *
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * Sets the password.
	 *
	 * @param password the new password
	 */
	public void setPassword(String password) {
		this.password = password;
	}


	public Set<Vote> getVotes() {
		return votes;
	}

	public void setVotes(Set<Vote> votes) {
		this.votes = votes;
	}

}
