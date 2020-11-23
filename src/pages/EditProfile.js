import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";

class EditProfile extends Component {
    state = {
        /* user: "", */
        username: this.props.user.username,
        weight: this.props.user.weight,
        goal: this.props.user.goal,
    }

   /*  componentDidMount() {
      const userId = this.props.user._id
    
      return (
          this.props.userInfo(userId)
          .then(response => this.setState({ user: response }))
          .catch(error => console.log(error))
      )
  } */
  
  
  handleFormSubmit = event => {
        event.preventDefault();
        const userId = this.props.user._id
        const { username, weight, goal } = this.state;
        this.props.editProfile ({ userId, username, weight, goal})
  };

    
  handleChangeUsername = (event) => {
      this.setState({
          username : event.target.value
      })
  };

  handleChangeWeight = (event) => {
      this.setState({
          weight: event.target.value
      })
  }; 

  handleChangeGoal = (event) => {
    this.setState({
        goal: event.target.value
    })
  };

    render() {
        /* const { username, weight, goal, imgPath } = this.state; */
        return (
            <div>
              <h1>Edit your profile </h1>

                <form onSubmit={this.handleFormSubmit}>

                <div>
                <label>Username:</label>  
                <input type="text" name="username" value={this.props.user.username} onChange={ e => this.handleChangeUsername(e)} />
                </div>

                <div>
                <label>Weight:</label>
                <input type="number" name="weight" value={this.props.user.weight} onChange={ e => this.handleChangeWeight(e)} />
                </div>

                <div>
                <label>Goal:</label>
                <input type="number" name="goal" value={this.props.user.goal} onChange={ e => this.handleChangeGoal(e)} />
                </div>

                {/* <div>
                <label> Photo:</label>
                <input type="file" name="imgPath" value={this.state.imgPath} onChange={ e => this.handleChange(e)}/>
                </div> */}

                <input type="submit" value="Submit"/>

                </form>  
            </div>
        )
    }
}

export default withAuth(EditProfile);
