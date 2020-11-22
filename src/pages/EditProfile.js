import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";

class EditProfile extends Component {
    state = {
        username: this.props.user.username, 
        weight: this.props.user.imgPath, 
        goal: this.props.user.imgPath, 
        imgPath: this.props.user.imgPath,
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { username, weight, goal, imgPath } = this.state;
        this.props.user ({ username, weight, goal, imgPath })
        console.log(this, 'este es el username')
        };

      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    componentWillUnmount() {
        this.setState = (state, callback) => {
          return;
        };
      }

    render() {
        const { username, weight, goal, imgPath } = this.state;
        return (
            <div>
              <h1>Edit your profile </h1>

                <form onSubmit={this.handleFormSubmit}>

                <div>
                <label>Username:</label>
                <input type="text" name="title" value={username} onChange={ e => this.handleChange(e)} required/>
                </div>

                <div>
                <label>Weight:</label>
                <input type="number" name="description" value={weight} onChange={ e => this.handleChange(e)} required/>
                </div>

                <div>
                <label>Goal:</label>
                <input type="number" name="url" value={goal} onChange={ e => this.handleChange(e)} required/>
                </div>

                <div>
                <label> Photo:</label>
                <input type="file" name="imgPath" value={imgPath} onChange={ e => this.handleChange(e)} required/>
                </div>

                <input type="submit" value="Submit"/>

                </form>  
            </div>
        )
    }
}

export default withAuth(EditProfile);
