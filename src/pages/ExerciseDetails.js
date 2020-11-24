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
            <div>
          <h1 className="exercise-details-title">Exercise details</h1>
          <div className="exercise-details-container-tablet">
                <div className="exercise-details-container" key={this.state.exercise._id}>
                <div>
                <h3>
                <a  href={`/videos/favourites/${this.state.exercise._id}`}>
                <img className="icon-like" src="../images/star-icon-empty.svg" alt="star"/> 
                </a>{this.state.exercise.title}
                </h3>
                <ReactPlayer className="details-player"  controls={true} url={this.state.exercise.url}/>
                <p><img className="icon-video" src="../images/clock-icon.svg" alt="clock"/> {this.state.exercise.duration}min video </p>
                <p><img className="icon-video" src="../images/dumbbell-icon.svg" alt="dubbell"/> You will exercise your {this.state.exercise.muscle}</p> 
                <p><img className="icon-video-smaller" src="../images/thermometer-icon.svg" alt="thermometer"/> It is {this.state.exercise.intensity} intensity</p> 
                <p>Description: {this.state.exercise.description}</p>
                </div>
                
                </div>
          </div>
        </div>
        )
    }
}
export default withAuth(ExerciseDetails);