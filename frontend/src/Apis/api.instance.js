import axios from "axios";
// import { Cookies } from "react-cookie";
const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));
const refreshAccessToken = JSON.parse(localStorage.getItem("refresh_token"));

export const instance = axios.create({  
  baseURL: "http://localhost:7132/api",
  // timeout: 1500,
  headers: {
    "Content-Type": "application/json",
    "api_key": "123456789",
  },
});
instance.defaults.headers.common["Authorization"] = token
  // Request interceptor for API calls
  instance.interceptors.request.use(
    async (config) => {
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",        
        "Content-Type": "application/x-www-form-urlencoded",
      };
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
// Response interceptor for API calls
instance.interceptors.response.use((response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
   
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const {data} = await refreshToken();
      axios.defaults.headers.common["Authorization"] = "Bearer " + data.token;
      setTokenToLocalStorage(data.token,data.refresh_token)
        return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);
async function refreshToken() {
  return instance.get(`/token/${user.id}`, {
    params: {
      refresh_token: refreshAccessToken,
    },
  });
}
export function setTokenToLocalStorage(token,refreshAccessToken,User){
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("refresh_token", JSON.stringify(refreshAccessToken));
    localStorage.setItem("user", JSON.stringify(User));
}
export function EmptyLocalStorage(){
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user");
 
}