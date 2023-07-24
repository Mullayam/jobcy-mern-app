import { ACTIONS } from "../actions";
export const AuthInitialState = {
  user: null,
  isLoader: false,
  isLoggedIn: false,
  location: null,
};
export function AuthReducer(AuthInitialState, action) {
  switch (action.type) {
    case ACTIONS.SET_ISLOGGEDIN: {
      return { ...AuthInitialState, isLoggedIn: action.payload };
    }
    case ACTIONS.SET_USER: {
      
      return { ...AuthInitialState, user: action.payload };
    }
    case ACTIONS.SET_LOCATION: {
      return { ...AuthInitialState, location: action.payload };
    }
    case ACTIONS.SET_LOADER: {
      return { ...AuthInitialState, isLoader: action.payload };
    }
    default: {
      return AuthInitialState;
    }
  }
}
