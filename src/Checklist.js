import React, { useState } from "react";
// move state and function handler to Form.js
function Checklist(props) {
  return (
    <>
      <label htmlFor="olives">Olives</label>
      <input
        name="olives"
        type="checkbox"
        checked={props.toppingsList.olives}
        onChange={props.handleCheckboxChanged}
        data-test-id="Checklist-olives"
      />
      <label htmlFor="jalapenos">Jalapeno</label>
      <input
        name="jalapenos"
        type="checkbox"
        checked={props.toppingsList.jalapenos}
        onChange={props.handleCheckboxChanged}
      />
      <label htmlFor="mushrooms">Mushrooms</label>
      <input
        name="mushrooms"
        type="checkbox"
        checked={props.toppingsList.mushrooms}
        onChange={props.handleCheckboxChanged}
      />
      <label htmlFor="pineapple">Pineapple</label>
      <input
        name="pineapple"
        type="checkbox"
        checked={props.toppingsList.pineapple}
        onChange={props.handleCheckboxChanged}
      />
    </>
  );
}

export default Checklist;

// style components
