import { setState } from "react";
import React, { Component } from "react";
import "./entry.style.css";
import Login from  "./CreateData.js"
import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class Entry extends Component {
  state = {
    fname: "",
    lname: "",
    username: "",
    email: "",
    dob: "",
    password: "",
    cpassword: "",
    image: "",
    gender: "",
    tncs: "",
    isChecked: true,

    errors: {},
  };

  // test() {
  //   if (this.state.fname == "") {
  //   }
  // }
  acceptTerms = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
    // console.log(this.state.isChecked);
  };
  hello = (event) => {
    let newValue = event.currentTarget.value;
    // alert(newValue);
    this.setState({ gender: newValue });
    console.log(this.state.gender);
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };

  checkclick = (e) => {
    // alert(e.currentTarget.value);
    let clickbtnc = e.currentTarget.value;
    this.setState({ tncs: clickbtnc });
  };

  formValidation = () => {
    let isValid = true;
    const errors = {};
    if (this.state.fname.trim().length < 2) {
      errors.fNameLength = "First Name must be of length 2 or higher.";
      isValid = false;
    }
    if (this.state.lname.trim().length < 2) {
      errors.lNameLength = "Last Name must be of length 2 or higher.";
      isValid = false;
    }
    if (this.state.password.trim().length < 6) {
      errors.passwordLength = "Password too short.";
      isValid = false;
    }
    if (this.state.password != this.state.cpassword) {
      errors.passwordsMatch = "Passwords do not match.";
      isValid = false;
    }
    if (this.state.isChecked == false) {
      errors.checkbox = "Please Accept the terms and conditions.";
    }
    this.setState({ errors });
    return isValid;
  };

  submitFunc = (e) => {
    e.preventDefault();
    const isValid = this.formValidation();

    if (isValid && this.state.isChecked) {
      console.log(this.state.fname);
      console.log(this.state.lname);
      console.log(this.state.email);
      console.log(this.state.dob);
      console.log(this.state.password);
      console.log(this.state.image);
      console.log(this.state.gender);
    }
  };

  handleFormSubmit = (e) => {
    

    axios
      .post("http://127.0.0.1:8000/user/profile/", {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        first_name: this.state.fname,
        last_name: this.state.lname,
        age: this.state.dob,
      })
      .then(function (response) {
        console.log(response);
        window.location.href = "/Login";
      })
      .catch(function (error) {
        console.log(error);
      });
      
  };

  render() {
    return (
      <div className="regestration-page ">
        {/* <div className="max-width"> */}
        <div className="formBox box jumbotron">
          <Form onSubmit={this.submitFunc}>
            <Row className="mb-3 ">
              <Col md={4} className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  required
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </Col>
              <Col md={4} className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  required
                  value={this.state.fname}
                  onChange={this.onChange}
                />
              </Col>

              <Col md={4} className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  required
                  value={this.state.lname}
                  onChange={this.onChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={7} className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </Col>
              <Col md={5} className="mb-3">
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  required
                  value={this.state.dob}
                  onChange={this.onChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6} className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="cpassword"
                  required
                  value={this.state.cpassword}
                  onChange={this.onChange}
                />
              </Col>
            </Row>


         

           

            <Button
              variant="primary"
              type="submit"
              onClick={this.handleFormSubmit}
            >
              Submit
            </Button>
            <br></br>
            {Object.keys(this.state.errors).map((i) => {
              return (
                <div style={{ color: "red" }} key={i}>
                  {this.state.errors[i]}
                </div>
              );
            })}
          </Form>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
export default Entry;
