import React, { Component } from 'react'
import { withAuth } from '../lib/AuthProvider';
import axios from "axios";
import { Link } from "react-router-dom";

class Profile extends Component {
    state = {
        weightDifference: 0,
    }

    componentDidMount = async () => {
        const user = await axios.get("http://localhost:4000")
        this.setState({ user: user.data})
        console.log(this.props.user, 'this is  the user')
    }

    
//   ESTOY INTENTANDO HACER LA DIFERENCIA ENTRE EL PESO Y EL OBJETIVO PERO NO ME SALE

//     subtraction = (arr) => {
//     if (Object.prototype.toString.call(arr) === '[object Array]') {
//     var total = arr[0];
//     if (typeof (total) !== 'number') {
//       return false;
//     }
//     for (var i = 1, length = arr.length; i < length; i++){
//       if (typeof (arr[i]) === 'number'){
//         total -= arr[i];
//       }else 
//       return false;
//     }
//     return total;
//    } 
//     else
//      return false;
//   }
    
//   weightDifference = (weight, goal) => {
//     weight = this.props.user.weight;
//     goal = this.props.user.goal;
//     const difference = weight - goal;
//     this.setState({ weightDifference: difference})
//     console.log(this.state.weightDifference, 'esta es la diferencia')
// }
  


    render() {
        
        return (
            <div>
            <img src={this.props.user.imgPath} alt="user" />
            <a href={`/profile/${this.props.user._id}/edit`}><img src="/images/edit-icon.svg" alt="pencil" /></a>
            <h1>Hello, {this.props.user.username}. Welcome to your profile.</h1>
               <p>Current weight: {this.props.user.weight}kg</p>
               <p>Goal: {this.props.user.goal}kg</p>
               <p>You have {this.weightDifference}kg left.</p>
               <button><Link to={`/videos/favourites/${this.props.user._id}`} className="">
               Favourite videos
                </Link></button>
               <button><Link to={`/profile/${this.props.user._id}/add-video`} >Add new video</Link></button>
            </div>
        )
    }
}

export default withAuth(Profile);