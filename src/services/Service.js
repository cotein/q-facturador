import axios from 'axios';

const baseURL = process.env.APP_API_SERVER;

const api = axios.create({
    baseURL,
});

api.interceptors.request.use(config => {
  config.headers["Authorization"] = `Bearer ${sessionStorage.getItem("user-token")}` 
  config.headers["Access-Control-Allow-Origin"] = "*"
  config.headers["Access-Control-Allow-Headers"] = 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin'
  config.headers["Content-Type"] = 'application/json'
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