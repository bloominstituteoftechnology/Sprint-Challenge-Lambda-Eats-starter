import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .min(2, "Valid name must be at least 2 characters long"),
  size: yup.string().required("Please choose a size"),
  toppings: yup.string(),
});

export default function Form(props) {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    sizes: "",
    toppings: "",
    pepperoni: false,
    instructions: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    toppings: "",
    instructions: "",
  });


  // onChange function
  const inputChange = (e) => {
    e.persist();
    console.log("input changed!", e.target.value, e.target.checked);
    // validate(e);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        console.log(props.addUser);
        props.addUser(response.data);
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
          <select id="sizes" name="sizes">
            <option value="Large"> large</option>
            <option value="Medium"> medium </option>
            <option value="Small"> small </option>
            <option value="Personal Pizza"> personal </option>
          </select>
        </form>
      </div>

      <div className="toppingComponent">
        <h3> Choose your toppings </h3>
        <label htmlFor="pepperoni">
          <input
            type="checkbox"
            id="pepperoni"
            name="pepperoni"
            checked={formState.toppings}
            onChange={inputChange}
          ></input>
          add pepperoni for $1
          </label>

          <label htmlFor="mushrooms">
          <input
            type="checkbox"
            id="mushrooms"
            name="mushrooms"
            checked={formState.toppings}
            onChange={inputChange}
          ></input>
          add mushrooms for $.50 
          </label>

          <label htmlFor="pineapple">
          <input
            type="checkbox"
            id="pineapple"
            name="pineapple"
            checked={formState.toppings}
            onChange={inputChange}
          ></input>
          add pineapple for $.50 
          </label>
         
          <label htmlFor="olives">
          <input
            type="checkbox"
            id="olives"
            name="olives"
            checked={formState.toppings}
            onChange={inputChange}
          ></input>
          add olives for $.50 
          </label>
        </div> 


    <div className= "component">
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

      <button>Submit</button>
  
    </form>
  );
}
