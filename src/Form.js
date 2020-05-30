import React, { useState, useEffect } from "react";
import Checklist from "./Checklist";
import Dropdown from "./Dropdown";
import pizzaSizeOptions from "./pizzaSizeOption";
import * as yup from "yup";
import axios from "axios";

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

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [size, setSize] = useState(pizzaSizeOptions[0]);

  useEffect(() => {
    formSchema.isValid(name).then((v) => {
      setButtonDisabled(!v);
    });
  }, [name.name]);

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
    const formData = {
      name: name.name,
      size: size.value,
      toppings,
      instruction,
    };
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users/1", formData)
      .then((res) => {
        // setPost(res.data);
        console.log("success", res);
      })
      .catch((err) => console.log(err.response));

    // console.log(selectedToppings, name, instruction, size);

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

      <button type="submit" disabled={buttonDisabled}>
        Place Order
      </button>
    </form>
  );
}

export default Form;

// add style to textarea and button in this component
