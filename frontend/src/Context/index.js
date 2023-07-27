import { createContext, useCallback, useReducer, useState } from "react";
import { AppReducer, InitialDataState } from "../Store/index";
import { GetAllCategories } from "../Apis/apiCore";

const Filters = {
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

export const AppContext = createContext();
export const AppContextProvider = (props) => {
  const [App, dispatch] = useReducer(AppReducer, InitialDataState);
  const [filters, setFilters] = useState(Filters);
  const [categories, setCategories] = useState([]);

  const FetchRequiredInfoForApp = useCallback(async () => {
    const { data } = await GetAllCategories();
    if (data.success) {
      setCategories(data.data.Categories);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ App, dispatch, filters, setFilters, FetchRequiredInfoForApp,categories }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
