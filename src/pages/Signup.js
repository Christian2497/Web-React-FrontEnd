import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from '../lib/AuthProvider';

class Signup extends Component {
  state = { 
    username: "", 
    email: "", 
    weight: 0, 
    goal: 0, 
    password: "",
    repeatPassword: "",
    message: "",
    isError: {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
  } 
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, email, weight, goal, password, repeatPassword } = this.state;
    //console.log('Signup -> form submit', { username, password });
    this.props.signup({ username, email, weight, goal, password, repeatPassword });
  };

  handleChange = event => {
    const { name, value } = event.target;
    const regExp = RegExp(
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    )
    let isError = { ...this.state.isError };

        switch (name) {
            case "username":
                isError.name =
                    value.length < 1  ? "Introduce your name " : "";
                break;
            case "email":
                isError.email = regExp.test(value) ? "" : "Email address is invalid";
            break;
            case "password":
                isError.password =
                    value.length < 6 ? "Introduce a password with at least 6 characters" : "";
            break;
            case "repeatPassword":
                isError.repeatPassword =
                   value !== this.state.password ? "Passwords don't match" : "";
            break;
            default:
                break;
        }
    this.setState({ 
      isError,
      [name]: value 
    });
  };

  errorMessage = () => {
    this.setState({ message: "This email already exists. Try another one!"})
  }

  render() {
    const { username, email, weight, goal, password, repeatPassword } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>
          <div>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} required/>
          {this.state.isError.name.length > 0 && (
                        <span className="invalid-feedback">{this.state.isError.name}</span>
          )}
          </div>
          <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} required/>
          {this.state.isError.email.length > 0 && (
                        <span className="invalid-feedback">{this.state.isError.email}</span>
          )}
          </div>
          <label>Weight:</label>
          <input type="number" name="weight" value={weight} onChange={this.handleChange} />

          <label>Goal:</label>
          <input type="number" name="goal" value={goal} onChange={this.handleChange} />
          
          <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} required/>
          {this.state.isError.password.length > 0 && (
                        <span className="invalid-feedback">{this.state.isError.password}</span>
          )}  
          </div>
          <div>
          <label>Repeat Password:</label>
          <input type="password" name="repeatPassword" value={repeatPassword} onChange={this.handleChange} required/>
          {this.state.isError.repeatPassword.length > 0 && (
                        <span className="invalid-feedback">{this.state.isError.repeatPassword}</span>
          )} 
          </div>
          <input type="submit" value="Signup" onClick={this.errorMessage}/>
          <div>
            {this.state.message}
          </div>
        </form>
        


        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
