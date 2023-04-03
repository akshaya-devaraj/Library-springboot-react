package com.example.backendcode.tourist;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class Tourist {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	private String book;
	private String email;
	private Long phone;
	
	public int getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getBook() {
		return book;
	}

	public void setBook(String book) {
		this.book = book;
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

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}
	
	@Override
	public String toString() {
		return "Tourist [id=" + id + ", book=" + book + ", name=" + name + ", email=" + email + ", phone=" + phone + "]";
	}
	
	public Tourist(int id, String book, String name, String email, Long phone) {
		super();
		this.id = id;
		this.book = book;
		this.name = name;
		this.email = email;
		this.phone = phone;
	}

	public Tourist()
	{
		
	}
	
}
