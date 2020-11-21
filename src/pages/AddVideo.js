import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';

class AddVideo extends Component {
    state = { 
        title: "",
        description: "",
        url: "",
        intensity: "",
        muscle: "",
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { title, description, url, intensity, muscle } = this.state;
        this.props.addExercise ({ title, description, url, intensity, muscle })
        };

      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
      errorMessage = () => {
        this.setState({ message: "This exercise already exists. Try another one!"})
      }
    render() {
        const { title, description, url, intensity, muscle } = this.state;
        return (
            <div>
                <h1>Create a new exercise</h1>

                <form onSubmit={this.handleFormSubmit}>
                <div>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={ e => this.handleChange(e)} required/>
            
                </div>
                <div>
                <label>Description:</label>
                <input type="text" name="description" value={description} onChange={ e => this.handleChange(e)} required/>
                
                </div>
                <div>
                <label>URL:</label>
                <input type="text" name="url" value={url} onChange={ e => this.handleChange(e)} required/>
                
                </div>
                <div>
                <label>Intensity:</label>
                <input type="text" name="intensity" value={intensity} onChange={ e => this.handleChange(e)} required/>
                
                </div>
                <div>
                <label>Muscle:</label>
                <input type="text" name="muscle" value={muscle} onChange={ e => this.handleChange(e)} required/>
                
                </div>
                <input type="submit" value="Submit"/>

                </form>
            </div>
        )
    }
}
export default withAuth(AddVideo);