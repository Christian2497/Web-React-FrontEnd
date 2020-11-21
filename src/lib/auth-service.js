import axios from "axios";
class Auth {
  constructor() {
    this.auth = axios.create({
      // baseURL: process.env.REACT_APP_API_URI,
      baseURL: 'http://localhost:4000',
      withCredentials: true,  
    });
  }

  userInfo({ username, email, weight, goal }){
    return this.auth
    .get("/profile/:id", { username, email, weight, goal })
    .then(({ data }) => data);
  }

  signup({ username, email, weight, goal, password, repeatPassword }) {
    return this.auth
      .post("/signup", { username, email, weight, goal, password, repeatPassword  })
      .then(({ data }) => data);
  }

  login({ email, password }) {
    return this.auth
      .post("/login", { email, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/logout", {}).then(({ data }) => data);
  }

  me() {
    return this.auth.get("/me").then(({ data }) => data);
  }

  addExercise({ title, description, url, intensity, muscle }) {
    return this.auth
      .post("/profile/:id/add-video", { title, description, url, intensity, muscle  })
      .then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Auth(); 

export default axiosRequestFunctions;
