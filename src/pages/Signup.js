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
    isError: {
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
  } 
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, email, weight, goal, password, repeatPassword } = this.state;
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
                isError.username =
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

  render() {
    const { username, email, weight, goal, password, repeatPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="signup-title">Sign Up</h1>

        <form className="signup-form" onSubmit={this.handleFormSubmit}>
          <div>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="ej: Alex" required/>
          {this.state.isError.username.length > 0 && (
           <span className="invalid-feedback">{this.state.isError.username}</span>
          )}
          </div>
          <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={ e => this.handleChange(e)} placeholder="ej: test@test.com" required/>
          {this.state.isError.email.length > 0 && (
          <span className="invalid-feedback">{this.state.isError.email}</span>
          )}
          
          </div>
          <div className="weight-goal" id="weight">
          <label className="weight2">Weight:</label>
          <input type="number" name="weight" value={weight} onChange={ e => this.handleChange(e)} placeholder="ej: 50" />

          <label className="weight2">Goal:</label>
          <input type="number" name="goal" value={goal} onChange={ e => this.handleChange(e)} placeholder="ej: 40" />
          </div>
          <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={ e => this.handleChange(e)} placeholder="******" required/>
          {this.state.isError.password.length > 0 && (
          <span className="invalid-feedback">{this.state.isError.password}</span>
          )}  
          </div>
          <div>
          <label>Repeat Password:</label>
          <input type="password" name="repeatPassword" value={repeatPassword} onChange={ e => this.handleChange(e)} placeholder="******" required/>
          {this.state.isError.repeatPassword.length > 0 && (
          <span className="invalid-feedback">{this.state.isError.repeatPassword}</span>
          )} 
          </div>
          <div className="signup-button-div">
          <input className="signup-button" type="submit" value="Signup" onClick={this.errorMessage}/>
          </div>
          <p>Already have account? <Link to={"/login"}> Login</Link></p>
        </form>

        
      </div>
    );
  }
}

export default withAuth(Signup);
