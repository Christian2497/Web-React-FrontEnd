import React, { Component } from "react";
import "./App.css";
// import '~video-react/dist/video-react.css';
// import { Player } from 'video-react';
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import AuthProvider from "./lib/AuthProvider";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {

  render() {
    return (
      <AuthProvider>
      <Navbar />
        <div className="container">
          <Switch> 
            <AnonRoute exact path="/" component={Home} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
           {/*  <PrivateRoute exact path="/profile" component={Profile} /> */}
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
