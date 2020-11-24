import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import auth from "../lib/auth-service";

class FavouriteExercise extends Component {
  state = {
    user: "",
    exercises: [],
}



favExercises = async () =>  {
      try {
        const losFav = this.props.user.favourite;
        console.log(losFav, 'los fav')
        const exercises = await losFav;
        console.log(exercises, 'exercises')
        await this.setState({ exercises: exercises })
        } catch (error) {
          console.log(error)
      }
    }

    componentDidMount = async () => {
       const favourites = this.favExercises()
       const favDetails = this.props.exerciseInfo(favourites)
       await this.setState({ exercises: favDetails })
  }

    render() {
        console.log(this.state.exercises, 'son las props del favorito')
        return (
            <div>
        <h1>Favourite list</h1>
              
               { this.state.exercises ? this.state.exercises.map((favourite, index) => {
                    return (
                      <div>
                      <li key={index}>favouser</li>
                      <p>Title: <Link to={`/videos/${favourite}`}>{favourite.title}</Link></p>
                      <p style={{maxWidth: '400px'}} >Description: {favourite.description} </p> 
                      </div>
                      )}) : <p>Loading...</p>} 
            </div>
            )
        
        
    }
}
export default withAuth(FavouriteExercise);