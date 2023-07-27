import React, { useEffect } from "react";
import { useAppContext } from "../../../Hooks/useAppContext";
const Section = React.lazy(() => import("../Layout/Section"));
const Home = React.lazy(() => import("../Home"));

const Layout = () => {
  document.title = "Home | Jobcy - Job Listing ";
  const { FetchRequiredInfoForApp } = useAppContext();
  useEffect(() => {
    FetchRequiredInfoForApp();
  }, []);
  return (
    <div>
      <Section />
      <Home />
    </div>
  );
};

export default Layout;
