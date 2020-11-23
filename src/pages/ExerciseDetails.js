import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";

class ExerciseDetails extends Component {
    state = {
        exercise: "",
    }

    componentDidMount() {
        console.log(this.props.match.params.id, 'las props')
        const exerciseId = this.props.match.params.id
        
      
        return (
            this.props.exerciseInfo(exerciseId)
            .then(response => this.setState({ exercise: response }))
            .catch(error => console.log(error))
            
        )
        
    }

    // getTheSingleExercise = () => {
    //     const exerciseId = this.props.exercise._id;
    //     console.log(this.props, ' props ejercicio')
    //     console.log(exerciseId, ' id ejercicio')
    //       return(
    //         this.props.exerciseInfo(exerciseId)
    //           .then(response => this.setState({ exercise: response }) )
              
    //           .catch(error => console.log(error))
    //       )
    //   }

    render() {
        
        console.log(this.props.match.params.exercise, 'es el state')
        return (
            <div className="profile-container">
            <h1 className="profile-text">Name: {this.state.exercise.title}</h1>
               <p className="profile-text">Description: {this.state.exercise.description}</p>
            </div>
        )
    }
}
export default withAuth(ExerciseDetails);