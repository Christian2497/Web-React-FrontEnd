import axios from "axios";
//cada uno de los métodos más abajo se conecta con el backend
class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:4000",//esta es la URL del servidor del backend, y esta base haciendo esto así es como si estuviese delante de los paths de los métodos más abajo.
      withCredentials: true,  //esto es para que cuando se contecte grabe una coockie que diga que estás autenticado (guarda tus credenciales).
    });
  }

  signup({ username, password }) {
    return this.auth
      .post("/auth/signup", { username, password })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  login({ username, password }) {
    return this.auth
      .post("/auth/login", { username, password })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
    // return this.auth.post("/auth/logout", {}).then((response) => response.data);
  }

  me() { //este es el usuario activo
    return this.auth.get("/auth/me").then(({ data }) => data);
    // return this.auth.get("/auth/me").then((response) => response.data);
  }
}

const axiosRequestFunctions = new Auth();  //creamos un objeto en base a esta clase y más abajo lo exportamos en AuthProvider

export default axiosRequestFunctions;
