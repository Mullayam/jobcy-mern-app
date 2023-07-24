import { createContext } from "react";
const InitialState = {};
export const AppContext = createContext(InitialState);
export const AppContextProvider = (children) => {
  return (
    <AppContextProvider value={InitialState}>{children}</AppContextProvider>
  );
};
