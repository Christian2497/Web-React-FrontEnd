import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light " >
        <Link to={"/"} className="navbar-brand">
          <h4>logo</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          
        <div className="navbar-nav ">
        {isLoggedin ? (
            <>
                <Link to={`/profile/${user._id}`} className="nav-link active">
                  My profile
                </Link>
                <Link to="/calendar" className="nav-link">
                  Calendar
                </Link>
                <Link to="/exercises" className="nav-link">
                  Exercises
                </Link>
                <Link to="/faq" className="nav-link">
                  FAQ
                </Link>
                <button className='nav-link' onClick={logout}>Logout</button>
            </>
          ) : (
            <>
                  <Link to="/login" className="nav-link">Login</Link>
                  <Link to="/signup" className="nav-link ">Sign Up</Link>
                  <Link to="/faq" className="nav-link">FAQ</Link>
            </>
          )}
          </div>
        </div>
      </nav>
    );
  }
}

export default withAuth(Navbar); //se tiene que exportar como parte del withauth porque si no no puede coger las props de si está logueado o no para cambiar la navbar
