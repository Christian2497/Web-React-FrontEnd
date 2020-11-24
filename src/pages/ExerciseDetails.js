import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import ReactPlayer from 'react-player/youtube'

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
        return (
            <div className="profile-container">
            <ReactPlayer controls={true} url={this.state.exercise.url}/>
            <h1 className="profile-text">Name: {this.state.exercise.title}</h1>
               <p className="profile-text">Description: {this.state.exercise.muscle}</p>
               <p className="profile-text">Intensity: {this.state.exercise.intensity}</p>
               <p className="profile-text">Muscle group: {this.state.exercise.description}</p>
            </div>
        )
    }
}
export default withAuth(ExerciseDetails);