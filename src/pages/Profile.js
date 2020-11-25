import React, { Component } from 'react'
import { withAuth } from '../lib/AuthProvider';
import { Link } from "react-router-dom";

class Profile extends Component {
    state = {
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
        this.setState = (state, callback) => {
          return;
        };
    }

    render() {
        
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
               {this.state.user.weight - this.state.user.goal === 0 ? 
                 <p className="profile-text">You did it! CONGRATULATIONS! Keep the good job!</p>
               :
                 <p className="profile-text">You are {this.state.user.weight - this.state.user.goal}kg from your objective, let's do this!</p>
               }
               
               <button><Link to={`/videos/favourites/${this.state.user._id}`} className="">Favourite videos</Link></button>
               <button><Link to={`/profile/${this.state.user._id}/add-video`} >Add new video</Link></button>
               <button><Link to={`/profile/${this.state.user._id}/my-exercises`} > My exercises </Link></button>
            </div>
            </div>
        </div>
        )
    }
}

export default withAuth(Profile);