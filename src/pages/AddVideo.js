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
        duration: 0,
    }
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    const userId = this.props.user._id
    const { title, description, url, intensity, muscle, duration} = this.state;
    this.props.addExercise ({ userId, title, description, url, intensity, muscle, duration })
    this.props.userInfo(userId)
    this.props.history.push(`/profile/${userId}/my-exercises`);
  }

   handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
      };
    
    render() {
        const { title, description, url, intensity, muscle, duration } = this.state;
        return (
            <div className="add-video-container">
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

                <div className="add-video-form-duration">
                <label>Duration:</label>
                <input type="number" name="duration" value={duration} onChange={ e => this.handleChange(e)} required/>
                </div>

                <div>
                <div className="add-video-selectors">
                <label>Intensity:</label>
                <select name="intensity" value={intensity} onChange={ e => this.handleChange(e)} required>
                  <option defaultValue value> -- select an option -- </option>
                  <option value="low">Low</option>
                  <option value="medium">Not so low</option>
                </select>
                </div>
                
                <div className="add-video-selectors">
                <label>Muscle:</label>
                <select name="muscle" value={muscle} onChange={ e => this.handleChange(e)} required>
                  <option defaultValue value> -- select an option -- </option>
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