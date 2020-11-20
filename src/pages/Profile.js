import React, { Component } from 'react'
import { withAuth } from '../lib/AuthProvider';
import axios from "axios";

class Profile extends Component {
    

    componentDidMount = async () => {
        const user = await axios.get("http://localhost:4000")
        this.setState({ user: user.data})
        console.log(this.props.user, 'this is  the user')
    }


    render() {
        
        return (
            <div>
            <img src={this.props.user.imgPath} alt="user picture" />
            <h1>Hello, {this.props.user.username}. Welcome to your profile.</h1>
               <p>{this.props.user.weight}</p>
               <p>{this.props.user.goal}</p>
               
            </div>
        )
    }
}

export default withAuth(Profile);
