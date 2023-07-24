import React from "react";
import Select from "react-select";
const JobType = () => {
  const options = [
    { label: "Accounting", value: "1" },
    { label: "IT & Software", value: "2" },
    { label: "Marketing", value: "3" },
    { label: "Banking", value: "4" }
  ];
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      border: 0,
      boxShadow: "none",
      padding: "12px 0 12px 40px",
      margin: "-16px -6px 0 -52px",
      borderRadius: "0"
    })
  };
  return (
    <React.Fragment>
      <Select
        options={options}
        styles={colourStyles}
        className="selectForm__inner"
        data-trigger
        defaultValue={{ label: "Accounting", value: 0 }}
        name="choices-single-categories"
        id="choices-single-categories"
        aria-label="Default select example"
      />
    </React.Fragment>
  );
};

export default JobType;
