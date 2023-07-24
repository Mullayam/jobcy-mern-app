import { createContext } from "react";
export const InitialState = {
  appState:"Handling",
};
export const AppContext = createContext(InitialState);
export const AppContextProvider = (props) => {
  return (
    <AppContext.Provider value={InitialState}>{props.children}</AppContext.Provider>
  );
};
