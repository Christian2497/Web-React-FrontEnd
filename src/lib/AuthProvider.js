import React, { Component } from "react";
import auth from "./auth-service";
const { Consumer, Provider } = React.createContext();

//HOC para crear Consumer
const withAuth = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Consumer>  
          {({ login, signup, user, logout, isLoggedin, addExercise, userInfo, allVideos, editProfile, exerciseInfo }) => { //cualquier componente que venga aquí va a devolver las props que tuviese + las que se le agregan aquí
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                addExercise={addExercise}
                userInfo={userInfo}
                exerciseInfo={exerciseInfo}
                allVideos={allVideos}
                editProfile={editProfile}
                {...this.props}  //estas son las props que ya tenía el componente
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// Provider
class AuthProvider extends Component { 
  state = { 
    isLoggedin: false, 
    user: null, 
    isLoading: true 
  
  }; 

  componentDidMount() { 
    auth
      .me()
      .then((user) =>
        this.setState({ isLoggedin: true, user: user, isLoading: false })
      )
      .catch((err) =>
        this.setState({ isLoggedin: false, user: null, isLoading: false })
      );
  }
//definimos 3 métodos (relacionados con auth-service.js):
  signup = (user) => {
    const { username, email, weight, goal, password, repeatPassword } = user;
    auth
      .signup({ username, email, weight, goal, password, repeatPassword })
      .then((user) => this.setState({ isLoggedin: true, user }))  
      /* .catch(({ error }) =>
        this.setState({ message: error.data.statusMessage })
      ); */
  };

  addExercise = (user) => {
    const { title, description, url, intensity, muscle } = user;
    auth
      .addExercise({ title, description, url, intensity, muscle })
      .then((user) => this.setState({ isLoggedin: true, user }))  
      .catch(({ error }) =>
        this.setState({ message: error.data.statusMessage })
      ); 
  };
  



  login = async (user) => {
    const { email , password } = user;

    try {
      const user = await auth.login({ email, password });
      this.setState({ isLoggedin: true, user });
    } catch (error) {
      console.log(error);
    }
  };

  logout = async () => {
    try {
      await auth.logout();
      this.setState({ isLoggedin: false, user: null });
    } catch (error) {
      console.log(error);
    }
  };

  userInfo = (id) => {
      return auth.userInfo(id)
      .then(user =>  user)
      .catch(error => console.log(error))
  }

  exerciseInfo = (id) => {
    return auth.exerciseInfo(id)
    .then(exercise =>  exercise)
    .catch(error => console.log(error))
}

  allVideos = (exercise) => {
    return auth.allVideos(exercise)
      .then((exercise) => this.setState({ isLoggedin: true, exercise}))  
      .catch(error => console.log(error))
      }

  editProfile = (user) => {
    const { userId, username, weight, goal} = user;console.log(userId, 'el user')
    auth
      .editProfile({ userId, username, weight, goal})
      .then((user) => this.setState({ isLoggedin: true, user }))  
      
      .catch(error => console.log(error, 'no se ha podido'))
  };


  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const { login, logout, signup, addExercise, allVideos, userInfo, exerciseInfo, editProfile } = this;

    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider value={{ isLoggedin, user, login, logout, signup, allVideos, addExercise, userInfo, exerciseInfo, editProfile }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, withAuth };
export default AuthProvider;
