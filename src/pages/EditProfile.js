import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";

class EditProfile extends Component {
    state = {
        username: this.props.username,
        weight: this.props.weight,
        goal: this.props.goal,
        imgPath: this.props.imgPath
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { username, weight, goal, imgPath } = this.state;
        this.props.editProfile ({ username, weight, goal, imgPath })
    };

      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        /* const { username, weight, goal, imgPath } = this.state; */
        return (
            <div>
              <h1>Edit your profile </h1>

                <form onSubmit={this.handleFormSubmit}>
                
                <div>
                <label>Username:</label>
                <input type="text" name="title" value={this.state.username} onChange={ e => this.handleChange(e)} />
                </div>

                <div>
                <label>Weight:</label>
                <input type="number" name="description" value={this.state.weight} onChange={ e => this.handleChange(e)} />
                </div>

                <div>
                <label>Goal:</label>
                <input type="number" name="url" value={this.state.goal} onChange={ e => this.handleChange(e)} />
                </div>

                <div>
                <label> Photo:</label>
                <input type="file" name="imgPath" value={this.state.imgPath} onChange={ e => this.handleChange(e)}/>
                </div>

                <input type="submit" value="Submit"/>

                </form>  
            </div>
        )
    }
}

export default withAuth(EditProfile);
