import React, { useState } from "react";
import pizzaSizeOptions from "./pizzaSizeOption";

function Dropdown(props) {
  // pizzaSizeOptions must be imported into Form
  // move handler and state functions into Form

  return (
    <div>
      <select onChange={props.handleDropdownOptionSelected}>
        {pizzaSizeOptions.map((pizzaSizeOption, key) => {
          return (
            <option
              key={key}
              defaultValue={props.selectedSize.value}
              value={pizzaSizeOption.value}
            >
              {pizzaSizeOption.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;

//
