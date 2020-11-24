import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class FavouriteExercise extends Component {
  state = {
    user: "",
    exercises: [],
}

componentDidMount = async () => {
    await this.favExercises()
}

favExercises = async () =>  {
      const losFav = this.props.user.favourite;
      const listOfFav =  await losFav.map(
        async (fav) => { 
          return await this.props.exerciseInfo(fav) 
        })
      console.log(listOfFav, 'list of fav')
      await this.setState({exercises: listOfFav})
    }



    render() {
        console.log(this.state.exercises, 'son las props del favorito')
        return (
            <div>
        <h1>Favourite list</h1>
              <div >
              { this.props.user.favourite.map((favourite, index) => {
                    return <li key={index}>favouser{}</li>
                  })
                  }
                <h3>Title: <Link to={`/videos/${this.state.exercises._id}`}>{this.state.exercises.title}</Link></h3>
                <p style={{maxWidth: '400px'}} >Description: {this.state.exercises.description} </p> 
              </div>
            )
        </div>
        )
    }
}
export default withAuth(FavouriteExercise);