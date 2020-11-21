import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";

class EditProfile extends Component {
    state = {
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { username, weight, goal, imgPath } = this.state;
        this.props.EditProfile ({ username, weight, goal, imgPath })
        };

      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

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
