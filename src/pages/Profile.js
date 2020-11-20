import React, { Component } from 'react'
import { withAuth } from '../lib/AuthProvider';

class Profile extends Component {
    
     state = {
        username: "",
        email: "",
        weight: 0, 
        goal: 0,
    }

    componentDidMount = () => {
        this.getInfoUser();
    }

    getInfoUser = async () => {
      
    } 
    render() {
        
        return (
            <div>
               <h1>{this.props.user.email}</h1>
            </div>
        )
    }
}

export default withAuth(Profile);
