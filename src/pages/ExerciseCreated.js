import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player/youtube';

class ExerciseCreated extends Component {
  state = {
    user: "",
    exerciseCreated: [],
}

    componentDidMount = async () => {
      const user = await this.props.userInfo(this.props.user._id)
      await this.setState({ exerciseCreated: user.exerciseCreated, user })
    }

    deleteExercise = (id) => {
      const userId = this.state.user._id
      this.props.deleteVideo(id);
      this.props.history.push(`/profile/${userId}`)
    }

    render() {
        return (
            <div>
              <h1 className="exercise-list-title">Created list</h1>
              <div className="exercise-created-container-tablet">
                { this.state.exerciseCreated ? this.state.exerciseCreated.map((created, index) => {
                    return (
                      <div className="exercise-created-container" key={index}> 
                      <ReactPlayer width='100%' height='100%' light={true} controls={true} url={created.url}/>
                      <p>Workout: <Link className="link-no-style" to={`/videos/${created._id}`}>{created.title}</Link></p>
                      <div className="favo-videos-icons">
                        <p>
                        <img className="icon-video" src="/images/dumbbell-icon.svg" alt="dubbell"/> 
                        {created.muscle} 
                        </p><p>
                        <img className="icon-video-smaller" src="/images/thermometer-icon.svg" alt="thermometer"/> 
                        {created.intensity} 
                        </p><p>
                        <img className="icon-video" src="/images/clock-icon.svg" alt="clock"/>
                        {created.duration}min
                        </p>
                        <button onClick={() => this.deleteExercise(created._id)}><span className="icon"><i className="fa fa-trash"></i></span></button>
                        <p>Description: {created.description}</p>
                        </div>
                      
                      </div>
                      )}) : <p>Loading...</p>}  
              </div>
            </div>
            )
    }
}
export default withAuth(ExerciseCreated);