import React, { Component } from "react";
import auth from "./auth-service";
const { Consumer, Provider } = React.createContext();

//HOC para crear Consumer
const withAuth = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Consumer>  
          {({ login, signup, user, logout, isLoggedin, addExercise }) => { //cualquier componente que venga aquí va a devolver las props que tuviese + las que se le agregan aquí
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                addExercise={addExercise}
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

  userInfo = async (user) => {
    const { username, weight, goal, imgPath } = user
    try {
      await auth.userInfo({ username, weight, goal, imgPath });
      this.setState({ isLoggedin: true, user })
    } catch (error) {
      
    }
  }
  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const { login, logout, signup, addExercise } = this;

    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider value={{ isLoggedin, user, login, logout, signup, addExercise }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, withAuth };
export default AuthProvider;
