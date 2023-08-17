import { createContext, useEffect, useReducer } from "react";
import { AuthReducer, AuthInitialState } from "../Store/reducers/AuthReducer";
import { SetUser, SetisLoggedin } from "../Store/Events";
import { getCookie } from "../Apis/api.instance";
export const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  const [Auth, dispatch] = useReducer(AuthReducer, AuthInitialState);
  useEffect(() => {
    const token = getCookie("token")    
    const user = JSON.parse(getCookie("user") || null);
    if (user && token) {
      dispatch(SetUser(user));
      dispatch(SetisLoggedin(true));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ Auth, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
