import React from "react";
import Select from "react-select"; 
import { LabelAndValueFormat, slugify } from "../../../Helpers";
import { useAppContext } from "../../../Hooks/useAppContext";
const JobType = () => {
  const { categories, filters, setFilters ,FetchRequiredInfoForApp} = useAppContext();

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      border: 0,
      boxShadow: "none",
      padding: "12px 0 12px 40px",
      margin: "-16px -6px 0 -52px",
      borderRadius: "0",
    }),
  };
React.useEffect(() => {
  FetchRequiredInfoForApp()
}, [])

  return (
    <React.Fragment>
      <Select
        options={LabelAndValueFormat(categories)}
        styles={colourStyles}
        className="selectForm__inner"
        data-trigger
        defaultValue={{ label: "Accounting & Finance", value: 1 }}
        name="choices-single-categories"
        id="category"
        aria-label="Default select example"
        onChange={({ label, value }) =>
          setFilters({ ...filters, Category: `${slugify(label)}-${value}` })
        }
      />
    </React.Fragment>
  );
};

export default JobType;
