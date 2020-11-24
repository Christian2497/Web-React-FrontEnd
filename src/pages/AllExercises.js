import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from "react-router-dom";
import auth from "../lib/auth-service";
import { Player } from 'video-react';

class AllExercises extends Component {
    state = {
      listOfVideos: [],
        
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
      console.log(this.state.listOfVideos, 'los exercises del render')
        return (
            
        <div>
        <h1 className="exercise-list-title">Exercise list</h1>
        <div className="exercise-list-container-tablet">
        { this.state.listOfVideos ? this.state.listOfVideos.map( exercise => {
            return (
            
              <div className="exercise-list-container" key={exercise._id}>
              <Player>
                <source src={exercise.url} />
                </Player>
                <Link to={`/videos/${exercise._id}`}>
                  <h3>Title: {exercise.title}</h3>
                </Link>
                <p style={{maxWidth: '400px'}} >Muscle: {exercise.muscle} Intensity: {exercise.intensity} </p> 
              </div>
              
        )}) : <p>Loading...</p>}
        </div>
        </div>
        )
    }
}
export default withAuth(AllExercises);