package com.gamovie.app.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

/**
 * The Class Role.
 */
@Entity
@Table(name="roles")
public class Role {

	/** The id. */
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	/** The name. */
	@Column(name="name")
	private String name;
	
	/** The users. */
	@ManyToMany(fetch=FetchType.LAZY,cascade= {CascadeType.DETACH,CascadeType.MERGE,CascadeType.REFRESH,CascadeType.PERSIST})
	@JoinTable(name="users_roles",joinColumns=@JoinColumn(name="role_id"),inverseJoinColumns=@JoinColumn(name="user_id"))
	private List<User> users;
	


	/**
	 * Instantiates a new role.
	 */
	public Role() {
		
	}

	/**
	 * Instantiates a new role.
	 *
	 * @param name the name
	 */
	public Role(String name) {
		this.name = name;
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
	 * Gets the users.
	 *
	 * @return the users
	 */

	
	
	
}