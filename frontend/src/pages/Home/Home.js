import React from "react";
import Jobcatogaries from "../Home/jobCatogaries";
import JobList from "./JobList/jobList";
import HowItWorks from "./HowItWorks";
import Cta from "./Cta";
import Testimonal from "./Testimonal"; 
import Client from "./Client";
const Home = () => {

  return (
    <React.Fragment>
      <Jobcatogaries   />
      <JobList />
      <HowItWorks />
      <Cta />
      <Testimonal />
      
      <Client />
    </React.Fragment>
  );
};

export default Home;
