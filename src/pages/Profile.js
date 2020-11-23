import React, { Component } from 'react'
import { withAuth } from '../lib/AuthProvider';
 //import axios from "axios";
import { Link } from "react-router-dom";
import EditProfile from "./EditProfile";

class Profile extends Component {
    state = {
        weightDifference: 0,
        user: "",
    }

    componentDidMount() {
        const userId = this.props.user._id
      
        return (
            this.props.userInfo(userId)
            .then(response => this.setState({ user: response }))
            .catch(error => console.log(error))
        )
    }


    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
          return;
        };
    }

    render() {
        // console.log(this.props.user, 'info del user')
        
        return (
        <div className="perfil">
            <div className="profile-container">
            <div className="profile">
            <div>
            <img className="profile-image" src={this.state.user.imgPath} alt="user" width="500" />
            <a  href={`/profile/${this.state.user._id}/edit`}><img className="profile-edit" src="/images/edit-icon.svg" alt="pencil" width="100"/></a>
            </div>
            <h1 className="profile-text">Hello, {this.state.user.username}. Welcome to your profile.</h1>
               <p className="profile-text">Current weight: {this.state.user.weight}kg</p>
               <p className="profile-text">Goal: {this.state.user.goal}kg</p>
               <p className="profile-text">You have {this.state.user.weight - this.state.user.goal}kg left.</p>
               <button><Link to={`/videos/favourites/${this.state.user._id}`} className="">
               Favourite videos
                </Link></button>
               <button><Link to={`/profile/${this.props.user._id}/add-video`} >Add new video</Link></button>
            </div>
            </div>
        </div>
        )
    }
}

export default withAuth(Profile);