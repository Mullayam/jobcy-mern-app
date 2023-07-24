import React from "react";
import Routes from "./Routes/index";
import { AppContextProvider } from "./Context/index";
//import Custom Style scss
import "./assets/scss/themes.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./Context/AuthContext";
function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        limit={4}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AppContextProvider>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </AppContextProvider>
    </React.Fragment>
  );
}

export default App;
