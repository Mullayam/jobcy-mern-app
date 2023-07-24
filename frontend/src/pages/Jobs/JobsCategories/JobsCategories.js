import React from "react";
import Categories from "./Categories";
import Cta from "./Cta";
import Section from "./Section";

const JobsCategories = () => {
  document.title =
    "Job Categories | Jobcy - Job Listing Template | Themesdesign";
  return (
    <React.Fragment>
      <Section />
      <Categories />
      <Cta />
    </React.Fragment>
  );
};

export default JobsCategories;
