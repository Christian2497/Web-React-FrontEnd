import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";

class ExerciseDetails extends Component {

    render() {
        console.log(this.props.user.favourite, 'son las props')
        return (
            <div className="profile-container">
            <h1 className="profile-text">Name: {this.props.name}</h1>
               <p className="profile-text">Description: {this.props.description}</p>
            </div>
        )
    }
}
export default withAuth(ExerciseDetails);