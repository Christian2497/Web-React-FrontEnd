import React, { Component } from "react";
import auth from "./auth-service";
const { Consumer, Provider } = React.createContext();

const withAuth = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Consumer>
          {({
            login,
            signup,
            user,
            logout,
            isLoggedin,
            addExercise,
            userInfo,
            allVideos,
            editProfile,
            exerciseInfo,
            deleteVideo,
            addFavourite,
            deleteFavourite
          }) => {
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
                deleteVideo={deleteVideo}
                addFavourite={addFavourite}
                deleteFavourite={deleteFavourite}
                {...this.props} 
              />
            );
          }}
        </Consumer>
      );
    }
  };
};


class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    user: null,
    isLoading: true,
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

  signup = (user) => {
    const { username, email, weight, goal, password, repeatPassword } = user;
    auth
      .signup({ username, email, weight, goal, password, repeatPassword })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch(( error ) =>
        this.setState({ message: error.data.statusMessage })
      ); 
  };

  login = async (user) => {
    const { email, password } = user;

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
    return auth
      .userInfo(id)
      .then((user) => user)
      .catch((error) => console.log(error));
  };

  exerciseInfo = (id) => {
    return auth
      .exerciseInfo(id)
      .then((exercise) => exercise)
      .catch((error) => console.log(error));
  };

  addExercise = (exercise) => {
    const { userId, title, description, url, intensity, muscle, duration } = exercise;
    auth
      .addExercise({ userId, title, description, url, intensity, muscle, duration })
      .then((exercise) => this.setState({ isLoggedin: true, exercise }))
      .catch(({ error }) =>
        this.setState({ message: error.data.statusMessage })
      );
  };

  allVideos = () => {
    auth
    .allVideos()
    .then((listOfVideos) => {this.setState({ isLoggedin: true, listOfVideos: listOfVideos.data })
    .catch((error) => console.log(error));
  })};

  editProfile = (user) => {
    const { userId, username, weight, goal, imgPath } = user;
    auth
      .editProfile({ userId, username, weight, goal, imgPath })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch((error) => console.log(error));
  };

  deleteVideo = (id) => {
    auth
    .deleteVideo(id)
    .then((exercise) => exercise)
    .catch((error) => console.log(error))
  }

  addFavourite = (id) => {
    auth
    .addFavourite(id)
    .then((exercise) => exercise)
    .catch((error) => console.log(error))
  }

  deleteFavourite = (id) => {
    auth
    .deleteFavourite(id)
    .then((exercise) => exercise)
    .catch((error) => console.log(error))
  }

  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const {
      login,
      logout,
      signup,
      addExercise,
      allVideos,
      userInfo,
      exerciseInfo,
      editProfile,
      deleteVideo,
      addFavourite,
      deleteFavourite,
    } = this;

    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider
        value={{
          isLoggedin,
          user,
          login,
          logout,
          signup,
          allVideos,
          addExercise,
          userInfo,
          exerciseInfo,
          editProfile,
          deleteVideo,
          addFavourite,
          deleteFavourite
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, withAuth };
export default AuthProvider;
