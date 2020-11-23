import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class FavouriteExercise extends Component {
  state = {
    exercises: [],
}

componentDidMount() {
    console.log(this.props.user.favourite, 'las props')
    const favExercises = this.props.user.favourite
    return (
        this.props.exerciseInfo(favExercises)
        .then(response => this.setState({ exercises: response }))
        .catch(error => console.log(error))
    )
}

    render() {
        console.log(this.state.exercises, 'son las props del favorito')
        return (
            <div>
        <h1>Favourite list</h1>
              <div >
              { this.props.user.favourite.map((favourite, index) => {
                    return <li key={index}>favouser{favourite.title}</li>
                  }) } 
                <h3>Title: <Link to={`/videos/${this.state.exercises._id}`}>{this.state.exercises.title}</Link></h3>
                <p style={{maxWidth: '400px'}} >Description: {this.state.exercises.description} </p> 
              </div>
            )
        </div>
        )
    }
}
export default withAuth(FavouriteExercise);