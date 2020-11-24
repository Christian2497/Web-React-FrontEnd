import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from "react-router-dom";
import auth from "../lib/auth-service";

class AllExercises extends Component {
    state = {
      listOfVideos: [],
        
      };

    

    allExercises = async () => {
        console.log('entra al all exercises')
        try {
        const exercises = await auth.allVideos();
        console.log(exercises, 'exercises')
        await this.setState({ listOfVideos: exercises })
        console.log(this.state.listOfVideos, 'estos todos los exercises de all exercises')
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
        <h1>Exercise list</h1>
        { this.state.listOfVideos ? this.state.listOfVideos.map( exercise => {
            return (
            
              <div key={exercise._id}>
                <Link to={`/videos/${exercise._id}`}>
                  <h3>{exercise.title}</h3>
                </Link>
                <p style={{maxWidth: '400px'}} >{exercise.description} </p> 
              </div>
        )}) : <p>Loading...</p>}
        </div>
        )
    }
}
export default withAuth(AllExercises);