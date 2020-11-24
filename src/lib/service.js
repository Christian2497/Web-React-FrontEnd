import axios from "axios";

class Service {
    constructor() {
      this.service = axios.create({
        baseURL: process.env.REACT_APP_API_URI,
        /* baseURL: "http://localhost:4000", */
        withCredentials: true, // => you might need this when having the users in the app
      });
    }

    handleUpload = async (theFile) => {
        console.log("file in service: ", theFile);
        try {
          const res = await this.service.post(`/upload`, theFile);
          return res.data;
        } catch (error) {
          console.log(error);
        }
    };

}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;