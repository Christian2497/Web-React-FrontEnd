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

    render() {
        return (
            <div>
              <h1 className="exercise-list-title">Created list</h1>
              <div className="exercise-favourite-container-tablet">
                { this.state.exerciseCreated ? this.state.exerciseCreated.map((created, index) => {
                    console.log(created.url, "createdurll")
                    return (
                      <div className="exercise-favourite-container" key={index}> 
                      <ReactPlayer width='100%' height='100%' controls={true} url={created.url}/>
                      <p>Workout: <Link className="link-no-style" to={`/videos/${created._id}`}>{created.title}</Link></p>
                      <p>You will exercise your {created.muscle} || It is {created.intensity} intensity</p> 
                      <p>Description: {created.description} </p> 
                      </div>
                      )}) : <p>Loading...</p>}  
              </div>
            </div>
            )
    }
}
export default withAuth(ExerciseCreated);