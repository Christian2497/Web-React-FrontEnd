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
import AddVideo from "./pages/AddVideo";

import AuthProvider from "./lib/AuthProvider";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import EditProfile from "./pages/EditProfile";

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
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/profile/:id/add-video" component={AddVideo} />
            <PrivateRoute exact path="/profile/:id/edit" component={EditProfile} />
            {/* <PrivateRoute exact path="/videos" component={} /> */}
            {/* <PrivateRoute exact path="/videos/:id" component={} /> */}
            {/* <PrivateRoute exact path="/videos/:id/edit" component={} /> */}
            {/* <PrivateRoute exact path="/videos/favourites/:id" component={} /> */}
            {/* <PrivateRoute exact path="/videos/completed/:id" component={} /> */}
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;