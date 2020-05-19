import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .min(2, "Name must be at least 2 characters long"),
  sizes: yup.string().required("Please choose a size"),
  //   toppings: yup.string(),
  pepperoni: yup.boolean(),
  pineapple: yup.boolean(),
  olives: yup.boolean(),
  mushrooms: yup.boolean(),

  instructions: yup.string(),
});

export default function Form(props) {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    sizes: "Small",
    pepperoni: false,
    pineapple: false,
    olives: false,
    mushrooms: false,
    instructions: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    toppings: "",
    instructions: "",
  });

  const [order, setOrder] = useState({});

  // anytime you're working with checkboxes, the value will be called value, not e.target.value
  const validate = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  // onChange function
  const inputChange = (e) => {
    e.persist();
    console.log("input changed!", e.target.value, e.target.checked);
    validate(e);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Pizza ordered!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={formState.name}
          onChange={inputChange}
        ></input>
        {errors.name.lenth > 2 ? <p className="error">{errors.name}</p> : null}
      </label>

      <div className="component">
        <form>
          Size
          <select
            id="sizes"
            name="sizes"
            value={formState.sizes}
            onChange={inputChange}
          >
            <option value="Large"> large</option>
            <option value="Medium"> medium </option>
            <option value="Small"> small </option>
            <option value="Personal Pizza"> personal </option>
          </select>
        </form>
      </div>

      {/* <label>
        pepperoni ($1)
        <input
          type="radio"
          onChange={(event) => inputChange(event)}
          data-test-id="bestTopping"
        />
        mushrooms ($.50)
        <input type="radio" onChange={(event) => inputChange(event)} />
        pineapple ($.50)
        <input type="radio" onChange={(event) => inputChange(event)} />
        olives ($.50)
        <input type="radio" onChange={(event) => inputChange(event)} />
      </label> */}

      <div className="toppingComponent">
        <h3> Choose your toppings </h3>
        <label htmlFor="pepperoni">
          <input
            data-test-id="bestTopping"
            type="checkbox"
            id="pepperoni"
            name="pepperoni"
            checked={formState.pepperoni}
            onChange={inputChange}
          ></input>
          add pepperoni for $1
        </label>

        <label htmlFor="mushrooms">
          <input
            type="checkbox"
            id="mushrooms"
            name="mushrooms"
            checked={formState.mushrooms}
            onChange={inputChange}
          ></input>
          add mushrooms for $.50
        </label>

        <label htmlFor="pineapple">
          <input
            type="checkbox"
            id="pineapple"
            name="pineapple"
            checked={formState.pineapple}
            onChange={inputChange}
          ></input>
          add pineapple for $.50
        </label>

        <label htmlFor="olives">
          <input
            type="checkbox"
            id="olives"
            name="olives"
            checked={formState.olives}
            onChange={inputChange}
          ></input>
          add olives for $.50
        </label>
      </div>

      <div className="component">
        <label htmlFor="instructions">
          Please note any special instructions
          <input
            type="text"
            name="instructions"
            id="instructions"
            placeholder="instructions"
            value={formState.instructions}
            onChange={inputChange}
          ></input>
        </label>
      </div>

      <button data-test-id="submitButton">Submit</button>
      <pre>{JSON.stringify(order, null, 2)}</pre>
    </form>
  );
}
