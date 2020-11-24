import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
//import auth from "../lib/auth-service";

class FavouriteExercise extends Component {
  state = {
    user: "",
    exercises: [],
}


    componentDidMount = async () => {
      const user = await this.props.userInfo(this.props.user._id)
      await this.setState({ exercises: user.favourite, user })
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
                      <p>Title: <Link to={`/videos/${favourite._id}`}>{favourite.title}</Link></p>
                      <p style={{maxWidth: '400px'}} >Description: {favourite.description} </p> 
                      </div>
                      )}) : <p>Loading...</p>}  
            </div>
            )
    }
}
export default withAuth(FavouriteExercise);