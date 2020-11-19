import axios from "axios";
class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:4000",
      withCredentials: true,  
    });
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
}

const axiosRequestFunctions = new Auth(); 

export default axiosRequestFunctions;
