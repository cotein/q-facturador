import axios from 'axios';

const baseURL = process.env.VUE_APP_API_SERVER;

const api = axios.create({
    baseURL,
});

api.interceptors.request.use(config => {
  config.headers["Authorization"] = `Bearer ${sessionStorage.getItem("user-token")}` 
  return config;
});

api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      switch (error.response.status) {
        case 401:
          console.log(401)
          break;
        case 404:
            console.log(404)
          break;
        case 500:
        console.log(500)
          break;
      }
   
      if (error.response.status == 400) {
        console.log(400)
      }
      return Promise.reject(error);
    }
  ); 

  export default api;