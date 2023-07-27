import React, { useCallback } from "react";
import { Input } from "reactstrap";
 
import { useAppContext } from "../../../Hooks/useAppContext";

 
const JobSearch = () => {
  const [value, setValue] = React.useState(""); 
  const {filters,setFilters } = useAppContext(); 

  const handleChange =  (e) => {     
    setFilters({...filters , SearchTerm: e.target.value  });
    setValue(e.target.value);
  }
   
  return (
    <React.Fragment>
      <Input
        value={value}
        type="search"
        onChange={handleChange}
        id="job_title"
        className="form-control filter-input-box"
        placeholder="Job, Company name..."
      />
    </React.Fragment>
  );
};

export default JobSearch;
