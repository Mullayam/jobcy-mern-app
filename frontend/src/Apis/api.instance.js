import axios from "axios";
// import { Cookies } from "react-cookie";
const token = getCookie("token");
const user = JSON.parse(getCookie("user"));
const refreshAccessToken = JSON.parse(localStorage.getItem("refresh_token"));

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,   
  headers: {
    "Content-Type": "application/json",
  },
});
instance.defaults.headers.common["Authorization"] = token;
// Request interceptor for API calls
instance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      API_KEY: "123456789",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// Response interceptor for API calls
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = await error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { data } = await refreshToken();
      axios.defaults.headers.common["Authorization"] = "Bearer " + data.token;
      setCookie("token", data.token, 3);
      setCookie("refresh_token", data.refresh_token, 3);
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);
async function refreshToken() {
  return instance.get(`/token/${user.username}`, {
    params: {
      refresh_token: refreshAccessToken,
    },
  });
}
export const SetUserCookies = (token, refreshAccessToken, User) => {
  setCookie("token", token, 3);
  setCookie("refresh_token", refreshAccessToken, 3);
  setCookie("user", JSON.stringify(User), 3);
};
export function DeleteAllCookes() {
  eraseCookie("token");
  eraseCookie("refresh_token");
  eraseCookie("user");
}
export function setTokenToLocalStorage(token, refreshAccessToken, User) {
  localStorage.setItem("token", JSON.stringify(token));
  localStorage.setItem("refresh_token", JSON.stringify(refreshAccessToken));
  localStorage.setItem("user", JSON.stringify(User));
}
export function EmptyLocalStorage() {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user");
}
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
