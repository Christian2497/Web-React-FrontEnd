import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class FavouriteExercise extends Component {

    render() {
        console.log(this.props.user.favourite, 'son las props del favorito')
        return (
            <div>
        <h1>Favourite list</h1>
          { this.props.user.favourite.map( exercise => {
            return (
              <div key={exercise._id}>
                <Link to={`/videos/${exercise._id}`}>
                  <h3>{exercise.title}</h3>
                </Link>
                <p style={{maxWidth: '400px'}} >{exercise.description} </p> 
              </div>
            )})
          }
        </div>
        )
    }
}
export default withAuth(FavouriteExercise);