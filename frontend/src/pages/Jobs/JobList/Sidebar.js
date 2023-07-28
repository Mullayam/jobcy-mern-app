import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button, Col, Collapse, Input, Label } from "reactstrap";
import { DateOptions,WorkExperience,TypeofEmployment } from "../../../Constants";
const Sidebar = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [toggleFirst, setToggleFirst] = useState(true); // Location
  const [toggleSecond, setToggleSecond] = useState(true); // Work experience
  const [toggleThird, setToggleThird] = useState(true); // type of exployment
  const [toggleFourth, setToggleFourth] = useState(true); //date posted
  const [toggleFifth, setToggleFifth] = useState(true); //tags and keywords
  const [value, setValue] = React.useState(10); // range slider
  //CheckBox
  const [employementType, setEmployementType] = useState(0);
  const [workExperience, setWorkExperience] = useState(0);
  const [isDateChecked, setIsDateChecked] = useState(0);
  const [isStrictMode, setIsStrictMode] = useState(false);
  const handleStrictMode = () => {
  
    let valuetobeset= !isStrictMode
     
         setIsStrictMode(valuetobeset);     
    if (!searchParams.has("strictMode")) {
      searchParams.append("strictMode",valuetobeset);
      setSearchParams(searchParams);
      return;
    }
    searchParams.set("strictMode", valuetobeset);
    setSearchParams(searchParams);
    return;
  }
  const handleOnWorkExperienceChange = (i) => {   
   setWorkExperience(i);
   if (!searchParams.has("WorkExperience")) {
    searchParams.append("WorkExperience", WorkExperience[i]);
    setSearchParams(searchParams);
    return;
  }
  searchParams.set("WorkExperience", WorkExperience[i]);
  setSearchParams(searchParams);
  return;
  };
  const handleOnEmploymentChange = (i) => {
    
     setEmployementType(i);
     if (!searchParams.has("EmploymentType")) {
      searchParams.append("EmploymentType", TypeofEmployment[i]);
      setSearchParams(searchParams);
      return;
    }
    searchParams.set("EmploymentType", TypeofEmployment[i]);
    setSearchParams(searchParams);
    return;
   };
  function onDateChange(i) {
    setIsDateChecked((prev) => (i === prev ? null : i));
    const FilterValueOnDatePosted = DateOptions[i].value;
    if (!searchParams.has("DatePosted")) {
      searchParams.append("DatePosted", FilterValueOnDatePosted);
      setSearchParams(searchParams);
      return;
    }
    searchParams.set("DatePosted", FilterValueOnDatePosted);
    setSearchParams(searchParams);
    return;
  }

  return (
    <React.Fragment>
      <Col lg={3}>
        <div className="side-bar mt-5 mt-lg-0">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="locationOne">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFirst(!toggleFirst);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Location Range
                </Button>
              </h2>
              <Collapse isOpen={toggleFirst}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="mb-3">
                      <div className="position-relative">
                      <input
                          className="form-check-input"
                          type="checkbox" 
                          checked={isStrictMode}
                          onChange={handleStrictMode}
                          id="strictMode"
                        />
                        <label
                          className="form-check-label ms-2 text-muted"
                          htmlFor="strictMode"
                        >
                         Strict Mode
                        </label>
                      </div>
                    </div>
                    <div className="area-range slidecontainer">
                      <div className="form-label mb-4">
                        Area Range: {value}.00 KM
                        <span
                          className="example-val mt-2"
                          id="slider1-span"
                        ></span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={value}
                        onChange={({ target: { value } }) => setValue(value)}
                        className={`slider ${
                          value > 50 ? "slider-50" : "slider-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="accordion-item mt-4">
              <h2 className="accordion-header" id="experienceOne">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleSecond(!toggleSecond);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Work experience
                </Button>
              </h2>
              <Collapse isOpen={toggleSecond}>
                <div className="accordion-body">
                  <div className="side-title">
                    {
                      WorkExperience.map((el,index)=>(
                        <div className="form-check mt-2" key={index}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={el}
                          id={`flexCheckChecked${index}`}
                          checked={workExperience ===index}
                          onChange={()=>handleOnWorkExperienceChange(index)}
                        />
                        <label
                          className="form-check-label ms-2 text-muted"
                          htmlFor="flexCheckChecked2"
                        >
                         {el}
                        </label>
                        </div>
                      ))
                    } 
                   
                    
                    
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="jobType">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleThird(!toggleThird);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Type of employment
                </Button>
              </h2>
              <Collapse isOpen={toggleThird}>
                <div className="accordion-body">
                  <div className="side-title">
                   
                  {
                    TypeofEmployment.map((el,index) =>{
                      return(
                        <div className="form-check mt-2" key={index}>
                        <Input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id={`flexRadioDefault${index}`}
                          onChange={()=>handleOnEmploymentChange(index)}
                           defaultChecked={index === employementType}
                        />
                        <label
                          className="form-check-label ms-2 text-muted"
                          htmlFor={`flexRadioDefault${index}`}
                        >
                          {el}
                        </label>
                      </div>
                      )
                    })
                  }
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="datePosted">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFourth(!toggleFourth);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Date Posted
                </Button>
              </h2>
              <Collapse isOpen={toggleFourth}>
                <div className="accordion-body">
                  <div className="side-title form-check-all">
                    {DateOptions.map((item, index) => (
                      <div className="form-check" key={index}>
                        <Input
                          className="form-check-input"
                          type="checkbox"
                          id="checkbox"
                          name="datePosted"
                          checked={index === isDateChecked}
                          onChange={() => onDateChange(index)}
                          value={item.value}
                        />
                        <Label
                          className="form-check-label ms-2 text-muted"
                          htmlFor="checkAll"
                        >
                          {item.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="tagCloud">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFifth(!toggleFifth);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Tags Cloud
                </Button>
              </h2>
              <Collapse isOpen={toggleFifth}>
                <div className="accordion-body">
                  <div className="side-title">
                    <Link to="#" className="badge tag-cloud fs-13 mt-2">
                      design
                    </Link>
                    <Link to="#" className="badge tag-cloud fs-13 mt-2">
                      marketing
                    </Link>
                    <Link to="#" className="badge tag-cloud fs-13 mt-2">
                      business
                    </Link>
                    <Link to="#" className="badge tag-cloud fs-13 mt-2">
                      developer
                    </Link>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Sidebar;
