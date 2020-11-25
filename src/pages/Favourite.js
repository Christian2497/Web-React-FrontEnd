import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'

class FavouriteExercise extends Component {
  state = {
    user: "",
    exercises: [],
}

    componentDidMount = async () => {
      const user = await this.props.userInfo(this.props.user._id)
      await this.setState({ exercises: user.favourite, user })
  }

  delFavExercise = (id) => {
    const userId = this.props.user._id
    this.props.deleteFavourite(id);
    this.props.userInfo(userId);
    this.props.history.push(`/videos/favourites/${userId}`)
  }

    render() {
        return (
            <div className="favourite-container">
              <h1 className="exercise-list-title">Favourite list</h1>
              <div className="exercise-favourite-container-tablet">
                { this.state.exercises ? this.state.exercises.map((favourite, index) => {
                    return (
                      <div className="exercise-favourite-container" key={index}>
                      <div className="video-fav">
                      <ReactPlayer width='100%'height='100%' controls={true} url={favourite.url}/>
                      </div>
                      <div className="video-fav">
                      <p>Workout: <Link className="link-no-style" to={`/videos/${favourite._id}`}>{favourite.title}</Link></p>
                      <p className="exercise-favourite-container-p">You will exercise your {favourite.muscle}</p>  
                      <p className="exercise-favourite-container-p">It is {favourite.intensity} intensity</p> 
                      <p className="exercise-favourite-container-p">Description: {favourite.description} </p> 
                      <button onClick={() => this.delFavExercise(favourite._id)}><span className="icon"><i className="fa fa-trash"></i></span> </button>
                      </div>
                      </div>
                      )}) : <p>Loading...</p>}  
              </div>
            </div>
            )
    }
}
export default withAuth(FavouriteExercise);