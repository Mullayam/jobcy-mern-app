import { ACTIONS } from "../actions";

export const InitialDataState = {
  Category: "",
  Keywords: [],
  JobLocation: "",
  SearchTerm: "",
  Tags: [],
  Experience: "",
  Employment: "",
  Posted_On: "",
  Range: "",
  StrictMode: false,
  Jobdetails_ID: "",
};
export function AppReducer(InitialDataState, action) {
  switch (action.type) {
    case ACTIONS.SET_CATEGORY: {
      return { ...InitialDataState, Category: action.payload };
    }
    case ACTIONS.SET_KEYWORDS: {
      return { ...InitialDataState, Keywords: action.payload };
    }
    case ACTIONS.SET_JOB_LOCATION: {
      return { ...InitialDataState, JobLocation: action.payload };
    }
    case ACTIONS.SET_SEARCH: {
      return { ...InitialDataState, SearchTerm: action.payload };
    }
    case ACTIONS.SET_TAGS: {
      return { ...InitialDataState, Tags: action.payload };
    }
    case ACTIONS.SET_EMPLOYMENT: {
      return { ...InitialDataState, Employment: action.payload };
    }
    case ACTIONS.SET_POSTED_ON: {
      return { ...InitialDataState, Posted_On: action.payload };
    }
    case ACTIONS.SET_EXPERIENCE: {
      return { ...InitialDataState, Experience: action.payload };
    }
    case ACTIONS.SET_RANGE: {
      return { ...InitialDataState, Range: action.payload };
    }
    case ACTIONS.SET_STRICT_MODE: {
      return { ...InitialDataState, StrictMode: action.payload };
    }
    default: {
      return InitialDataState;
    }
  }
}
