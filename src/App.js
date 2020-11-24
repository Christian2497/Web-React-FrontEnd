import React, { Component } from "react";
import "./App.css";
import ReactPlayer from 'react-player'
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
import AllExercises from "./pages/AllExercises";
import ExerciseDetails from "./pages/ExerciseDetails";
import FavouriteExercise from "./pages/Favourite";
import Calendar from "./pages/Calendar";
import Faq from "./pages/Faq";
import FaqP from "./pages/FaqP";

import Footer from "./components/Footer";


class App extends Component {

  render() {
    return (
      <AuthProvider>
      <Navbar />
        <div className="containers">
          <Switch> 
            <AnonRoute exact path="/" component={Home} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <AnonRoute exact path="/faq" component={Faq} />
            <PrivateRoute exact path="/faqP" component={FaqP} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/profile/:id/add-video" component={AddVideo} />
            <PrivateRoute exact path="/profile/:id/edit" component={EditProfile} />
            <PrivateRoute exact path="/videos" component={AllExercises} />
            <PrivateRoute exact path="/calendar" component={Calendar} />
            <PrivateRoute exact path="/videos/:id" component={ExerciseDetails} />
            {/* <PrivateRoute exact path="/videos/:id/edit" component={} /> */}
            <PrivateRoute exact path="/videos/favourites/:id" component={FavouriteExercise} />
            {/* <PrivateRoute exact path="/videos/completed/:id" component={} /> */}
          </Switch>
        </div>
        <Footer/>
      </AuthProvider>
    );
  }
}

export default App;