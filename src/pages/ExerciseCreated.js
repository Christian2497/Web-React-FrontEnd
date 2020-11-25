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
              <div className="exercise-favourite-container-tablet">
                { this.state.exerciseCreated ? this.state.exerciseCreated.map((created, index) => {
                    return (
                      <div className="exercise-favourite-container" key={index}> 
                      <ReactPlayer width='100%' height='100%' controls={true} url={created.url}/>
                      <p>Workout: <Link className="link-no-style" to={`/videos/${created._id}`}>{created.title}</Link></p>
                      <p>You will exercise your {created.muscle} || It is {created.intensity} intensity</p> 
                      <p> Duration : {created.duration} </p>
                      <p>Description: {created.description} </p> 
                      <button onClick={() => this.deleteExercise(created._id)}> Delete </button>
                      </div>
                      )}) : <p>Loading...</p>}  
              </div>
            </div>
            )
    }
}
export default withAuth(ExerciseCreated);