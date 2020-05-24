import React, { useState } from "react";
import Checklist from "./Checklist";
import Dropdown from "./Dropdown";
import pizzaSizeOptions from "./pizzaSizeOption";

function Form(props) {
  //*******add state*********

  const [name, setName] = useState("");

  const [instruction, setInstruction] = useState("");

  //checklist state

  const [toppings, setToppings] = useState({
    olives: false,
    jalapenos: false,
    mushrooms: false,
    pineapple: false,
  });

  //dropdown state

  const [size, setSize] = useState(pizzaSizeOptions[0]);

  //******add handlers********

  //checklist handler

  function handleCheckboxChanged(e) {
    const toppingName = e.target.name;
    const isSelected = e.target.checked;

    setToppings({ ...toppings, [toppingName]: isSelected });
  }

  //dropdown handler

  function handleDropdownOptionSelected(e) {
    const sizeValue = e.target.value;
    const selectedSize = pizzaSizeOptions.find(
      (pizzaSizeOption) => pizzaSizeOption.value === sizeValue
    );
    setSize(selectedSize);
  }

  function handlePizzaFormSubmission(e) {
    e.preventDefault();
    const selectedToppings = Object.keys(toppings).filter(
      (key) => toppings[key]
    );
    console.log(selectedToppings);
  }

  return (
    <form onSubmit={handlePizzaFormSubmission}>
      <div>
        <input
          name={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <div>
        <Checklist
          toppingsList={toppings}
          handleCheckboxChanged={handleCheckboxChanged}
        />
      </div>
      <div>
        <Dropdown
          selectedSize={size}
          handleDropdownOptionSelected={handleDropdownOptionSelected}
        />
      </div>

      <textarea
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
        placeholder="Special instructions"
      />

      <button>Place Order</button>
    </form>
  );
}

export default Form;

// add style to textarea and button in this component
