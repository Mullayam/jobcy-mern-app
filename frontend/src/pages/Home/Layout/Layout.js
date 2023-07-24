import React from "react";
const Section = React.lazy(() => import('../Layout/Section'));
const Home = React.lazy(() => import('../Home'));

const Layout = () => {
  document.title = "Home | Jobcy - Job Listing ";
  return (
    <div>
      <Section />
      <Home />
    </div>
  );
};

export default Layout;
