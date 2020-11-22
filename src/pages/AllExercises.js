import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import axios from "axios";
import { Link } from "react-router-dom";

class AllExercises extends Component {
    state = {
        exercises: []
      };

    componentDidMount = async () => {
        this.getTheSingleExercise();
        console.log(this.getTheSingleExercise, 'SE HA MONTADO EL TEMA')
    }

    allExercises = async () => {
        console.log('entra al all exercises')
        const {title, description, url, intensity, muscle} = this.state;
        const exercises = this.props.allVideos({title, description, url, intensity, muscle});
        this.setState({ exercises: exercises })
        console.log(this.props.allVideos, 'estos todos los exercises')
    }
    
    getTheSingleExercise = () => {
      const { params } = this.props.match;
  
      axios.get(`http://localhost:4000/videos/${params._id}`)
  
      .then( responseFromApi =>{
        const theExercise = responseFromApi.data;
        console.log(theExercise, 'this is the exercise')
        this.setState(theExercise);
      })
      .catch((err)=>{
          console.log(err)
      })
    }

    render() {
        
        return (
            
        <div>
        <h1>Exercise list</h1>
          { this.exercises.map( exercise => {
            return (
              <div key={exercise._id}>
                <Link to={`/videos/${exercise._id}`}>
                  <h3>{exercise.title}</h3>
                </Link>
                <p style={{maxWidth: '400px'}} >{exercise.description} </p> 
              </div>
            )})
          }
        </div>
        )
    }
}
export default withAuth(AllExercises);