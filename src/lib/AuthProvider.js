import React, { Component } from "react";
import auth from "./auth-service"; // importamos funciones para llamadas axios a la API
const { Consumer, Provider } = React.createContext();

//HOC para crear Consumer
const withAuth = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Consumer>  
          {({ login, signup, user, logout, isLoggedin }) => { //cualquier componente que venga aquí va a devolver las props que tuviese + las que se le agregan aquí
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
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
class AuthProvider extends Component { //el provider es un componente de clase que devuelve un componente Provider. Provider sale del contexto de react(ya estaba definifo en la librería). todo el objeto que esté dentro del value del provider va a estar disponible para todos los componentes que sean consumer de ese provider.
  state = { isLoggedin: false, user: null, isLoading: true }; //actualiza su estado en relación a lo que tienen los métodos

  componentDidMount() { 
    auth
      .me() //esto devuelve la info del usuario
      .then((user) =>
        this.setState({ isLoggedin: true, user: user, isLoading: false }) //condiguramos en el state que el usuario está logueado y quién es
      )
      .catch((err) =>
        this.setState({ isLoggedin: false, user: null, isLoading: false })
      );
  }
//definimos 3 métodos (relacionados con auth-service.js):
  signup = (user) => {
    const { username, password } = user;
    // lamamos a auth.signup que se conecta con la ruta del backend
    auth
      .signup({ username, password }) //llamamos al método del service y le pasamos los datos del formulario
      .then((user) => this.setState({ isLoggedin: true, user }))  //los enviamos al backend si no hay errores y seteamos quién es el usuario y que está logueado.
      .catch(({ error }) =>
        this.setState({ message: error.data.statusMessage })
      );
  };

  login = async (user) => {
    const { username, password } = user;

    try {
      const user = await auth.login({ username, password });
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

  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const { login, logout, signup } = this;

    return isLoading ? (
      <div>Loading</div>
    ) : (
      /* dentro del value del provider tendremos datos que estarán disponibles para todos los componentes <Consumer> */
      <Provider value={{ isLoggedin, user, login, logout, signup }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, withAuth };
export default AuthProvider;
