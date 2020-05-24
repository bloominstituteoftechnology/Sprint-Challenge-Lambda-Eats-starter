import React, { useState } from 'react'
import * as yup from "yup";
import axios from "axios";


const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Your name should have at least 2 characters")
      .required("Name is a required field"),
    sizeChoice: yup
      .string()
      .required("Must include a size"),
    specialInstructions: yup.string(),
    addOns: yup
      .array()
      .min(1, "at least 1")
      .required("Please select"),
});

export default function Pizza() {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    sizeChoice: "",
    specialInstructions: "",
    addOns: []
  });

  const [errorState, setErrorState] = useState({
    name: "",
    sizeChoice: "",
    specialInstructions: "",
    addOns: []
  });

  const validate = e => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then(valid => {
        setErrorState({
          ...errorState,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0]
        });
      });
  };

  // onChange function
  const inputChange = e => {
    e.persist();
    validate(e);
    console.log(e.target.value);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const handleCheck = e => {
    e.persist();
    setFormState({
      ...formState,
      addOns: [formState.addOns, e.target.value]
    })
  }

  const toppingsCheck = e => {
    e.persist();
    setFormState({
      ...formState,
      addOns: [formState.addOns, e.target.value]
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        <h5>Name</h5>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name here..."
          value={formState.name}
          onChange={inputChange}
        />
        {errorState.name.length > 0 ? (
          <p className="error">{errorState.name}</p>
        ) : null}
      </label>
      <label htmlFor="specialInstructions">
        <h5>Special Instructions</h5>
        <textarea
          name="specialInstructions"
          id="specialInstructions"
          value={formState.specialInstructions}
          onChange={inputChange}
        />
        {errorState.specialInstructions.length > 0 ? (
          <p className="error">{errorState.specialInstructions}</p>
        ) : null}
      </label>
      <label htmlFor="sizeChoice">
        <h5>Choice of Size</h5>
        <select
          value={formState.sizeChoice}
          name="sizeChoice"
          id="sizeChoice"
          onChange={inputChange}
        >
            <option value="">--Please choose an option--</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra Large">Extra Large</option>
        </select>
      </label>
      <p> Choose Your Sauce: </p>
      <label>
        <input
          type="radio"
          id="garlicRanch"
          name="addOns"
          onChange={handleCheck}
        />
        Garlic Ranch
      </label>
      <label>
        <input
          type="radio"
          id="bbqSauce"
          name="addOns"
          onChange={handleCheck}
        />
        BBQ Sauce
      </label>
      <label>
        <input
          type="radio"
          id="spinachAlfredo"
          name="addOns"
          onChange={handleCheck}
        />
        Spinach Alfredo
      </label>
      <p> Choose Your Toppings: </p>
      <label>
        <input
          type="checkbox"
          id="pepperoni"
          name="toppings"
          checked={formState.toppings}
          onChange={toppingsCheck}
        />
        Pepperoni
      </label>
      <label>
        <input
          type="checkbox"
          id="sausage"
          name="toppings"
          checked={formState.toppings}
          onChange={toppingsCheck}
        />
        Sausage
      </label>
      <label>
        <input
          type="checkbox"
          id="canadianBacon"
          name="toppings"
          checked={formState.toppings}
          onChange={toppingsCheck}
        />
        Canadian Bacon
      </label>
      <label>
        <input
          type="checkbox"
          id="spicyItalianSausage"
          name="toppings"
          checked={formState.toppings}
          onChange={toppingsCheck}
        />
        Spicy Italian Sausage
      </label>
      <label>
        <input
          type="checkbox"
          id="grilledChicken"
          name="toppings"
          checked={formState.toppings}
          onChange={toppingsCheck}
        />
       Grilled Chicken
      </label>
      <label>
        <input
          type="checkbox"
          id="onion"
          name="toppings"
          checked={formState.toppings}
          onChange={toppingsCheck}
        />
        Onion
      </label>
      <label>
        <input
          type="checkbox"
          id="greenPepper"
          name="toppings"
          checked={formState.toppings}
          onChange={toppingsCheck}
        />
        Green Pepper
      </label>
      <label>
        <input
          type="checkbox"
          id="dicedTomatoes"
          name="toppings"
          checked={formState.toppings}
          onChange={toppingsCheck}
        />
        Diced Tomatoes
      </label>
       <label>
         <input
           type="checkbox"
           id="blackOlives"
           name="toppings"
           checked={formState.toppings}
           onChange={toppingsCheck}
         />
         Black Olives

       </label>
       <label>
       <input
         type="checkbox"
         id="roastedGarlic"
         name="toppings"
         checked={formState.toppings}
         onChange={toppingsCheck}
       />
       Roasted Garlic
     </label>
     <label>
     <input
       type="checkbox"
       id="artichokeHearts"
       name="toppings"
       checked={formState.toppings}
       onChange={toppingsCheck}
     />
     Artichoke Hearts
     
       </label>
          <label>
          <input
            type="checkbox"
            id="threeCheese"
            name="toppings"
            checked={formState.toppings}
            onChange={toppingsCheck}
          />
          Three Cheese
          
        </label>
        <label>
         <input
           type="checkbox"
           id="pineapple"
           name="toppings"
           checked={formState.toppings}
           onChange={toppingsCheck}
         />
         Pineapple
        
       </label>
       <label>
       <input
         type="checkbox"
         id="extraCheese"
         name="toppings"
         checked={formState.toppings}
         onChange={toppingsCheck}
       />
       Extra Cheese
      
     </label>
     <div>
       <p>
      <button type="submit">Add to Order</button>
      </p>
      </div>
    </form>
  );
}
