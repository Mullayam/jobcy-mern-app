import { ACTIONS } from "../actions";
export const AuthInitialState = {
  user: null,
  isLoader: false,
  isLoggedIn: false,
  location: null,
};
export function AuthReducer(AuthInitialState, action) {
  switch (action.type) {
    case "SET_ISLOGGEDIN": {
      return { ...AuthInitialState, isLoggedIn: action.payload };
    }
    case "SET_USER": {
      
      return { ...AuthInitialState, user: action.payload };
    }
    case "SET_LOCATION": {
      return { ...AuthInitialState, location: action.payload };
    }
    case "SET_LOADER": {
      return { ...AuthInitialState, isLoader: action.payload };
    }
    default: {
      return AuthInitialState;
    }
  }
}
