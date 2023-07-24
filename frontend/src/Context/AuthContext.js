import { createContext, useEffect, useReducer } from "react";
import { AuthReducer, AuthInitialState } from "../Store/reducers/AuthReducer";
import { SetUser, SetisLoggedin } from "../Store/Events";
export const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  const [Auth, dispatch] = useReducer(AuthReducer, AuthInitialState);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || null);
    if (user) {
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
