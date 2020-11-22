import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';


class AddVideo extends Component {
  constructor(props){
    super(props); 
    this.state = { 
        title: "",
        description: "",
        url: "",
        intensity: "",
        muscle: "",
    }
  }

    handleFormSubmit = event => {
        event.preventDefault();
        const { title, description, url, intensity, muscle } = this.state
        this.props.addExercise ({ title, description, url, intensity, muscle })
        .then(() => {
          this.props.getData();
          this.setState({ 
            title: "",
            description: "",
            url: "",
            intensity: "",
            muscle: "",
          })
        })
          .catch(error => console.log(error));
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
                <h1 className="add-video-title">Create a new exercise</h1>

                <form className="add-video-form" onSubmit={this.handleFormSubmit}>
                <div className="add-video-form-div">
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={ e => this.handleChange(e)} required/>
            
                </div>
                <div className="add-video-form-div">
                <label>Description:</label>
                <input type="text" name="description" value={description} onChange={ e => this.handleChange(e)} required/>
                
                </div>
                <div className="add-video-form-div">
                <label>URL:</label>
                <input type="text" name="url" value={url} onChange={ e => this.handleChange(e)} required/>
                </div>
                <div>
                <div className="add-video-selectors">
                <label>Intensity:</label>
                <select name="intensity" value={intensity} onChange={ e => this.handleChange(e)} required>
                  <option hidden selected disabled value> -- select an option -- </option>
                  <option selected value="low">Low</option>
                  <option value="medium">Not so low</option>
                </select>
                
                </div>
                
                <div className="add-video-selectors">
                <label>Muscle:</label>
                <select name="muscle" value={muscle} onChange={ e => this.handleChange(e)} required>
                  <option hidden selected disabled value> -- select an option -- </option>
                  <option value="abs">Abs</option>
                  <option value="arms">Arms</option>
                  <option value="back">Back</option>
                  <option value="cardio">Cardio</option>
                  <option value="legs">Legs</option>
                  <option value="shoulders">Shoulders</option>
                </select>
                </div>
                </div>
                <div className="add-video-button-div">
                <input className="add-video-button" type="submit" value="Submit"/>
                </div>
                </form>
            </div>
        )
    }
}
export default withAuth(AddVideo);