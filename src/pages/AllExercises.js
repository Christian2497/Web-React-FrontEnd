import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from "react-router-dom";
import auth from "../lib/auth-service";
import ReactPlayer from 'react-player/youtube'

class AllExercises extends Component {
    state = {
      listOfVideos: [],
      //videosToShow: this.state.listOfVideos
      };

    allExercises = async () => {
        try {
        const exercises = await auth.allVideos();
        await this.setState({ listOfVideos: exercises })
      } catch (error) {
          console.log(error)
      }
    }
    
    componentDidMount() {
       this.allExercises()
    }

    render() {
      return (
        <div>
          <h1 className="exercise-list-title">Exercise list</h1>
          <div className="exercise-list-container-tablet">
          { this.state.listOfVideos ? this.state.listOfVideos.map( exercise => {
              return (
                <div className="exercise-list-container" key={exercise._id}>
                <ReactPlayer  width='100%' height='100%' light={true} controls={true} url={exercise.url}/>
                <h3>Workout:<Link className="link-no-style" to={`/videos/${exercise._id}`}> {exercise.title} </Link></h3>
                <p >
                <div className="all-videos-icons">
                <p>
                <img className="icon-video" src="../images/dumbbell-icon.svg" alt="dubbell"/> 
                {exercise.muscle} 
                </p><p>
                <img className="icon-video-smaller" src="../images/thermometer-icon.svg" alt="thermometer"/> 
                {exercise.intensity} 
                </p><p>
                <img className="icon-video" src="../images/clock-icon.svg" alt="clock"/>
                {exercise.duration}min
                </p>
                </div>
                </p> 
                </div>
                )}) : <p>Loading...</p>}
          </div>
        </div>
        )
    }
}
export default withAuth(AllExercises);