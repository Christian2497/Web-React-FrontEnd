import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from "react-router-dom";
import auth from "../lib/auth-service";
import ReactPlayer from 'react-player/youtube'

class AllExercises extends Component {
    state = {
      listOfVideos: [],
      videosToShow: ""
      };

    allExercises = async () => {
        try {
        const exercises = await auth.allVideos();
        await this.setState({ listOfVideos: exercises, videosToShow: exercises })
      } catch (error) {
          console.log(error)
      }
    }
    
    componentDidMount() {
       this.allExercises()
    }

    searchVideo = event => {
      const videosCopy = [...this.state.listOfVideos];
      const search = videosCopy.filter((video) => {
         return video.title.toLowerCase().includes(event.target.value);
      })
      this.setState({
        videosToShow: search
      })
    };

    render() {
      let filter = this.state.videosToShow ?this.state.videosToShow.map(function(video){
        return(
          <div className="exercise-list-container">
          <ReactPlayer  width='100%' height='100%' light={true} controls={true} url={video.url} />
          <h3>{video.title}</h3>
          <div className="all-videos-icons">
          <p> <img className="icon-video" src="../images/dumbbell-icon.svg" alt="dubbell"/> {video.muscle}</p>
          <p><img className="icon-video-smaller" src="../images/thermometer-icon.svg" alt="thermometer"/>{video.intensity} </p>
          <p> <img className="icon-video" src="../images/clock-icon.svg" alt="clock"/> {video.duration}min </p>
          </div>
          </div>
        )
      }): null


      return (
        <div>
          <h1 className="exercise-list-title">Exercise list</h1>
          <div>
            <span className="icon"><i className="fa fa-search"></i></span>
            <input type="search" className="search" name="search" placeholder="Search" value={this.state.search} onChange={(e) => this.searchVideo(e)}/>
          </div>
          <div className="exercise-list-container-tablet">
          {filter ? filter: (this.state.listOfVideos.map( exercise => {
              return (
                <div className="exercise-list-container" key={exercise._id}>
                <ReactPlayer  width='100%' height='100%' light={true} controls={true} url={exercise.url}/>
                <h3>Workout:<Link className="link-no-style" to={`/videos/${exercise._id}`}> {exercise.title} </Link></h3>
                <p >
                <div className="all-videos-icons">
                <p>
                <img className="icon-video" src="../images/dumbbell-icon.svg" alt="dubbell"/> 
                {exercise.muscle} 
                </p><p>
                <img className="icon-video-smaller" src="../images/thermometer-icon.svg" alt="thermometer"/> 
                {exercise.intensity} 
                </p><p>
                <img className="icon-video" src="../images/clock-icon.svg" alt="clock"/>
                {exercise.duration}min
                </p>
                </div>
                </p> 
                </div>
                )})
          )}
          </div>
        </div>
        )
    }
}
export default withAuth(AllExercises);