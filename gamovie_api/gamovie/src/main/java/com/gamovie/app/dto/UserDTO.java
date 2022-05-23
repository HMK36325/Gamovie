package com.gamovie.app.dto;

import java.time.LocalDate;
import java.util.List;

import com.gamovie.app.entity.Role;

public class UserDTO {

	private int id;
	private String name;
	private String email;
	private String password;
	private List<Role> roles;
	private LocalDate banned_at = null;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<Role> getRoles() {
		return roles;
	}
	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}
	public LocalDate getBanned_at() {
		return banned_at;
	}
	public void setBanned_at(LocalDate banned_at) {
		this.banned_at = banned_at;
	}

	

}
