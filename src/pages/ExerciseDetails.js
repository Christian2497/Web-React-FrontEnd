import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import ReactPlayer from 'react-player/youtube'

class ExerciseDetails extends Component {
    state = {
        exercise: "",
    }

    componentDidMount() {
        const exerciseId = this.props.match.params.id
        const userId = this.props.user._id
        this.props.userInfo(userId)
        return (
            this.props.exerciseInfo(exerciseId)
            .then(response => this.setState({ exercise: response }))
            .catch(error => console.log(error))
        )
    }

  
      favExercise = (id) => {
        const userId = this.props.user._id
        this.props.addFavourite(id);
        this.props.userInfo(userId);
        this.props.history.push(`/videos/favourites/${userId}`)
      }


    render() {
        return (
            <div>
            <h1 className="exercise-details-title">Exercise details</h1>
              <div className="exercise-details-container-tablet">
                    <div className="exercise-details-container" key={this.state.exercise._id}>
                      <div>
                      <h3>
                      <button onClick={() => this.favExercise(this.state.exercise._id)}><span className="icon"><i className="fa fa-star"></i></span> </button>
                      {this.state.exercise.title}
                      </h3>
                      <ReactPlayer className="details-player"  controls={true} url={this.state.exercise.url}/>
                      <p><img className="icon-video-smaller" src="../images/thermometer-icon.svg" alt="thermometer"/> It is {this.state.exercise.intensity} intensity</p> 
                      <p><img className="icon-video" src="../images/clock-icon.svg" alt="clock"/> {this.state.exercise.duration}min video </p>
                      <p><img className="icon-video" src="../images/dumbbell-icon.svg" alt="dubbell"/> You will exercise your {this.state.exercise.muscle}</p> 
                      <p>Description: {this.state.exercise.description}</p>
                      </div>
                    </div>
              </div>
          </div>
        )
    }
}
export default withAuth(ExerciseDetails);