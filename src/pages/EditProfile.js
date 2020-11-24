import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";

class EditProfile extends Component {
    state = {
        user: '', 
        username: '',
        weight: '',
        goal: '',
    }

    componentDidMount() {
      const userId = this.props.user._id
    
      return (
          this.props.userInfo(userId)
          .then(response => this.setState({ 
            user: response,
            username: response.username,
            weight: response.weight,
            goal: response.goal
            }))
          .catch(error => console.log(error))
      )
  }
  
<<<<<<< HEAD
    componentDidMount() {
        const userId = this.props.user._id
      
        return (
            this.props.userInfo(userId)
            .then(response => this.setState({ 
                user: response, 
                username: response.username, 
                weight: response.weight,
                goal: response.goal
             }))
            .catch(error => console.log(error))
        )
    }

  handleFormSubmit  = event => {
        event.preventDefault();
        const userId = this.state.user._id
        const { username, weight, goal } = this.state;
        this.props.editProfile ({ userId, username, weight, goal})
=======
  
  handleFormSubmit = event => {
        event.preventDefault();
        const userId = this.state.user._id
        const { username, weight, goal } = this.state;
        this.props.editProfile ({ userId, username, weight, goal});
>>>>>>> 9a9f5b34e28e63baba3c30e22446b2f3dabe6bb9
        this.props.userInfo(userId)
        this.props.history.push(`/profile/${userId}`);
  };

    
  handleChangeUsername = event => {
      this.setState({
          username : event.target.value
      })
  };

  handleChangeWeight = event => {
      this.setState({
          weight: event.target.value
      })
  }; 

  handleChangeGoal = event => {
    this.setState({
        goal: event.target.value
    })
  };

    render() {
        return (
            <div >
              <h1 className="edit-profile-title">Edit your profile </h1>

                <form className="edit-profile-form" onSubmit={this.handleFormSubmit}>

                <div>
                <label>Username:</label>  
                <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChangeUsername(e)} />
                </div>

                <div id="edit-weight">
                    <label>Weight:</label>
                    <input type="number" name="weight" value={this.state.weight} onChange={ e => this.handleChangeWeight(e)} />

                    <label>Goal:</label>
                    <input type="number" name="goal" value={this.state.goal} onChange={ e => this.handleChangeGoal(e)} />
                </div>
                <div>
                <label> Photo:</label>
                <input type="file" name="imgPath" value={this.state.imgPath} onChange={ e => this.handleChange(e)}/>
                </div>

                <input className="edit-profile-button" type="submit" value="Submit"/>

                </form>  
            </div>
        )
    }
}

export default withAuth(EditProfile);
