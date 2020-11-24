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

    render() {
        
        console.log(this.props.match.params.exercise, 'es el state')
        return (
            <div className="profile-container">
            <h1 className="profile-text">Name: {this.state.exercise.title}</h1>
               <p className="profile-text">Description: {this.state.exercise.muscle}</p>
               <p className="profile-text">Intensity: {this.state.exercise.intensity}</p>
               <p className="profile-text">Muscle group: {this.state.exercise.description}</p>
               <p className="profile-text">URL: {this.state.exercise.url}</p>
            </div>
        )
    }
}
export default withAuth(ExerciseDetails);