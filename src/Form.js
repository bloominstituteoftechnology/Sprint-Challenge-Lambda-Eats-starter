import React, { useState } from "react";
import Checklist from "./Checklist";
import Dropdown from "./Dropdown";
import pizzaSizeOptions from "./pizzaSizeOption";
import * as yup from "yup";

//******validation schema******
// yup NOT Yup
const formSchema = yup.object().shape({
  name: yup.string().min(3, "name is too short"),
});

function Form(props) {
  //*******add state*********

  const [name, setName] = useState({ name: "" });

  const [instruction, setInstruction] = useState("");

  // validation state. How to pass name into state?

  const [errors, setErrors] = useState({ name: "" });

  //checklist state

  const [toppings, setToppings] = useState({
    olives: false,
    jalapenos: false,
    mushrooms: false,
    pineapple: false,
  });

  //dropdown state

  const [size, setSize] = useState(pizzaSizeOptions[0]);

  //*****validation******

  const validate = (e) => {
    yup
      .reach(formSchema, "name")
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ name: "" });
      })
      .catch((err) => {
        setErrors({ name: err.errors[0] });
      });
  };

  //where to pass validate(e)?

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
      // axios call
    );
    console.log(selectedToppings);
    //do a react router redirect to the home route
  }

  function nameHandler(e) {
    validate(e);
    setName({ name: e.target.value });
  }

  return (
    <form onSubmit={handlePizzaFormSubmission}>
      <div>
        {name.name.length > 0 && errors.name.length > 0 ? (
          <div style={{ color: "red" }}>{errors.name}</div>
        ) : null}
        <input
          value={name.name}
          onChange={(e) => nameHandler(e)}
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

      <button type="submit">Place Order</button>
    </form>
  );
}

export default Form;

// add style to textarea and button in this component
