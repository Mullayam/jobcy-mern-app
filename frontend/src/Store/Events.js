import { ACTIONS } from "./actions";
export const SetisLoggedin = (data) => {  
  return { type: ACTIONS.SET_ISLOGGEDIN, payload: data };
};
export const SetLodaer = (data) => {
  return { type: ACTIONS.SET_LOADER, payload: data };
};
export const SetUser = (data) => { 
  return { type: ACTIONS.SET_USER, payload: data };
};
export const SetLocation = (data) => {  
  return { type: ACTIONS.SET_LOCATION, payload: data };
};
export const GetCategories = (data) => {
  return { type: ACTIONS.GET_CATEGORIES, payload: data };
}
export const GetJobs = (data) => {
  return { type: ACTIONS.GET_ALL_JOBS, payload: data };
}