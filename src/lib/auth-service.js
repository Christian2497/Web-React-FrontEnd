import axios from "axios";
class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      //baseURL: 'http://localhost:4000',
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
      .then(({ data }) =>  data);

  }

  logout() {
    return this.auth.post("/logout", {}).then(({ data }) => data);
  }

  me() {
    return this.auth.get("/me").then(({ data }) => data);
  }

  addExercise({ userId, title, description, url, intensity, muscle }) {
    return this.auth
      .post(`/profile/${userId}/add-video`, { title, description, url, intensity, muscle  })
      .then(({ data }) => data);
  }
  
  editProfile({ userId, username, weight, goal, imgPath }) {
    return this.auth
    .put(`/profile/${userId}/edit`, { userId, username, weight, goal, imgPath})
    .then(({ data }) => data);
  }

  userInfo(_id){
    return this.auth
    .get(`/profile/${_id}`, {})
    .then(({ data }) => data);
  }

  exerciseInfo(_id){
  return this.auth
  .get(`/videos/${_id}`, {})
  .then(({ data }) => data);
}

  allVideos() {
    return this.auth
      .get("/videos", { })
      .then(({ data }) => data);
  }

}

const axiosRequestFunctions = new Auth(); 

export default axiosRequestFunctions;
