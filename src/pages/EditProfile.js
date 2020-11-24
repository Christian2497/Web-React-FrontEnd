import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import  service  from "../lib/service";

class EditProfile extends Component {
    state = {
        user: "",
        username: "",
        weight: "",
        goal: "",
        imgPath: ""
    }

    componentDidMount() {
      const userId = this.props.user._id
    
      return (
          this.props.userInfo(userId)
          .then(response => this.setState({ 
            user: response,
            username: response.username,
            weight: response.weight,
            goal: response.goal,
            }))
          .catch(error => console.log(error))
      )
    }

    componentWillUnmount() {
      // fix Warning: Can't perform a React state update on an unmounted component
      this.setState = (state, callback) => {
        return;
      };
  }
  
  handleFormSubmit = event => {
        event.preventDefault();
        const userId = this.state.user._id
        const { username, weight, goal, imgPath } = this.state;
        this.props.editProfile ({ userId, username, weight, goal, imgPath});
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

  handleFileUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("imgPath", e.target.files[0]);
    try {
      const res = await service.handleUpload(uploadData);
      this.setState({ imgPath: res.secure_url });
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }
  };

    render() {
        return (
            <div >
              <h1 className="edit-profile-title">Edit your profile </h1>

                <form className="edit-profile-form" onSubmit={this.handleFormSubmit} encType="multipart/form-data">

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
                <input type="file" name="imgPath" onChange={ e => this.handleFileUpload(e)}/>
                {/* <input type="hidden" name="previousImg" /> */}
                </div>

                <input className="edit-profile-button" type="submit" value="Submit"/>

                </form>  
            </div>
        )
    }
}

export default withAuth(EditProfile);
