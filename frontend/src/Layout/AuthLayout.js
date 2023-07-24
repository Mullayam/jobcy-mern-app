import React, { useEffect } from "react";
import { useAuth } from "../Hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const {Auth} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (Auth.isLoggedIn) {
      navigate("/");
      return 
    }
  }, [Auth.isLoggedIn, navigate]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthLayout;
