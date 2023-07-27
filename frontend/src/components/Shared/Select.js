import React from "react";

export default function SelectBox({
  name,
  label,
  id,
  multiple = false,
  options = [], 
  info,
  setinfo
}) {
  let InitailState = multiple ? []:"";
  const [value, setValue] = React.useState(InitailState);
  const handleChange = (e) => {     
    if (multiple) {
      setValue([...value, e.target.value]);
    }  
    setValue(e.target.value);
    setinfo({ ...info, [id]: value });
    
  };

  return (
    <div className="mb-4">
      <label htmlFor={id} className="form-label">
        {label || "label Here"}
      </label>
      <select
        multiple={multiple ? "multuple" : ""}
        data-mdb-placeholder="Example placeholder"
        className="form-select"
        defaultValue={multiple ? [value] : id}
        onChange={handleChange}
        name={multiple ? name : id}
        id={id}
      >
        <option disabled>Choose a {label}</option>
        {options.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
