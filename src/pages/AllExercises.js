import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from "react-router-dom";

class AllExercises extends Component {
    state = {
      listOfVideos: [],
        
      };

    componentDidMount = () => {
          this.allVideos();
          console.log( this.allVideos(), 'all exercises')
    }

    // allExercises = async () => {
    //     console.log('entra al all exercises')
    //     const {title, description, url, intensity, muscle} = this.state;
    //     const exercises = this.props.allVideos({title, description, url, intensity, muscle});
    //     this.setState({ exercises: exercises })
    //     console.log(this.props.allVideos, 'estos todos los exercises')
    // }
    


    render() {
      console.log(this.state.exercises, 'los exercises')
        return (
            
        <div>
        <h1>Exercise list</h1>
        { this.state.listOfVideos.map( exercise => {
            return (
            
              <div key={this.state.exercise._id}>
                <Link to={`/videos/${this.state.exercise._id}`}>
                  <h3>{this.state.exercise.title}</h3>
                </Link>
                <p style={{maxWidth: '400px'}} >{this.state.exercise.description} </p> 
              </div>
        )})}
        </div>
        )
    }
}
export default withAuth(AllExercises);