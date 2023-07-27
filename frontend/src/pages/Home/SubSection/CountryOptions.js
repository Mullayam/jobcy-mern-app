import React from "react";
import Select from "react-select";
import { OnlyStates } from "../../../constants/IndianGeoData";
import { colourStyles } from "../../../constants/ColorStyle";
import { CovertArraytoSelectFormat } from "../../../Helpers";
import { useAppContext } from "../../../Hooks/useAppContext";

const CountryOptions = () => {
  const { filters, setFilters } = useAppContext();
 
  return (
    <React.Fragment>
      <Select
        options={CovertArraytoSelectFormat(OnlyStates())}
        className="choices selectForm__inner "
        defaultValue={{
          label: "Andhra Pradesh (AP)",
          value: "Andhra Pradesh (AP)",
        }}
        styles={colourStyles}
        onChange={({ value }) => setFilters({ ...filters, JobLocation: value })}
      />
    </React.Fragment>
  );
};

export default CountryOptions;
