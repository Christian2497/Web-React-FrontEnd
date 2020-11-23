import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";

class EditProfile extends Component {
    state = {
        username: this.props.user.username, 
        weight: this.props.user.weight, 
        goal: this.props.user.goal, 
        imgPath: this.props.user.imgPath,
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const userId = this.props.user._id
        const { username, weight, goal } = this.state;
        console.log(this.props, "prooops")
        this.props.editProfile ({ userId, username, weight, goal})
    };

    handleChangeUsername = (event) => {
      this.setState({
          username: event.target.value
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
                <input type="text" name="title" value={this.state.username} onChange={ e => this.handleChangeUsername(e)} />
                </div>

                <div>
                <label>Weight:</label>
                <input type="number" name="description" value={this.state.weight} onChange={ e => this.handleChangeWeight(e)} />
                </div>

                <div>
                <label>Goal:</label>
                <input type="number" name="url" value={this.state.goal} onChange={ e => this.handleChangeGoal(e)} />
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
