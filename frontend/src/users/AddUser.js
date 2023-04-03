import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/NavBar";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    book:""
  });

  const { name, phone, email, book } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
  const onSubmit = async (e) => {
    if(name==""){
      alert('enter a Name')
      this.setState({
        error: "Invalid name"
    });
    }
    const mail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if( !(phone.match('[0-9]{10}')) ){
      alert('Please provide valid phone number');
      this.setState({
        error: "Phone Number is not valid"
      });
    }
    if(!email.match(mail)){
      alert('Please provide valid e-mail');
      this.setState({
        error: "Email Id is not valid"
      });
    }
    if(book==""){
      alert('enter a book name')
      this.setState({
        error: "Invalid book"
    });
    }
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/home");
  };

  return (
    <div className="divt">
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="big22">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="font2">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="font2">
              <label htmlFor="PhoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your phone number"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="font2">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="font2">
              <label htmlFor="book" className="form-label">
                Book
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your book name"
                name="book"
                value={book}
                onChange={(e) => onInputChange(e)}/>
                </div><br/>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/home">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
