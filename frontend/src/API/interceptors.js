import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND;

const axiosInterceptor = axios.create();
// Add a response interceptor
axiosInterceptor.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log("Response intercepted: ", response)
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log("Error response intercepted: ", error)
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = jwt ? `Bearer ${jwt}` : "";
}

function checkJwt(jwt) {

}

export {
  axiosInterceptor
}
/* export default {
  iGet: axios.get,
   iPost: axios.post,
  iPut: axios.put,
  iDelete: axios.delete, 
  setJwt
}; */