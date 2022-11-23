import React from "react";
import Select from "react-select";
import { selectableOptions } from "./components/data";

const App = () => {
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
  };
  const handleChange = (selectedOptions) => {
    console.log("handleChange", selectedOptions);
  };
  return (
    <div>
      <div className="App">
        <Select
          className="input-cont"
          placeholder="Select an individual"
          options={selectableOptions}
          isMulti
          styles={colorStyles}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App;
