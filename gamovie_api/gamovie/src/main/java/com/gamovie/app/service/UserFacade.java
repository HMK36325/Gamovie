package com.gamovie.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamovie.app.dto.UserDTO;
import com.gamovie.app.entity.User;

@Service
public class UserFacade {
	  /** The user service. */
	@Autowired
	  private UserService userService;

	  /** The model mapper. */
	@Autowired
	  private ModelMapper modelMapper;
	
	 
	  /**
	 * Gets the all users.
	 *
	 * @return the all users
	 */
	public List<UserDTO> getAllUsers() {
	        return userService.findAll().stream().map(this::convertToUserDTO).collect(Collectors.toList());
	  }
	  
	  /**
	 * Find by id.
	 *
	 * @param id the id
	 * @return the user DTO
	 */
	public UserDTO findById(int id){
		     return convertToUserDTO(userService.findById(id));
		  }
	  
	  /**
	 * Adds the user.
	 *
	 * @param userdto the userdto
	 * @return the user
	 */
	public User addUser(UserDTO userdto){
		  User user=convertToUser(userdto);
		   userService.save(user);
		   return user;
}
	  
	  /**
	 * Delete by id.
	 *
	 * @param id the id
	 */
	public void  deleteById(int id){
		      userService.deleteBy(id);
		  }
	  



	  /**
	 * Convert to user DTO.
	 *
	 * @param user the user
	 * @return the user DTO
	 */
	public UserDTO convertToUserDTO(User user) {
		   UserDTO userDto = modelMapper.map(user, UserDTO.class);
		   return userDto;
	  }
	  
	/**
	 * Convert to user.
	 *
	 * @param userDTO the user DTO
	 * @return the user
	 */
	public User convertToUser(UserDTO userDTO) {
		   User user = modelMapper.map(userDTO, User.class);
		   return user;
		}
}
