import React, { useState, useEffect } from 'react'
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Must include email address"),
  sizeChoice: yup.string().required("Must include a size"),
  specialInstructions: yup.string(),
  terms: yup.boolean().oneOf([true], "Please agree to terms of use"),
  garlicRanch: yup.bool().oneOf([true], "Choose a sauce"),
  bbqSauce: yup.bool().oneOf([true], "Choose a sauce"),
  spinachAlfredo: yup.bool().oneOf([true], "Choose a sauce"),
//   toppings: yup.array(), "Choose a topping"),
//     pepperoni
//     sausage
//     canadianBacon
//     spicyItalianSausage
//     grilledChicken
//     onion
//     greenPepper
//     dicedTomatoes
//     blackOlives
//     roastedGarlic
//     artichokeHearts
//     threeCheese
//     pineapple
//     extraCheese
    pepperoni: yup.bool().oneOf([true], "Choose a topping"),
    sausage: yup.bool().oneOf([true], "Choose a topping"),
    canadianBacon: yup.bool().oneOf([true], "Choose a topping"),
    spicyItalianSausage: yup.bool().oneOf([true], "Choose a topping"),
    grilledChicken: yup.bool().oneOf([true], "Choose a topping"),
    onion: yup.bool().oneOf([true], "Choose a topping"),
    greenPepper: yup.bool().oneOf([true], "Choose a topping"),
    dicedTomatoes: yup.bool().oneOf([true], "Choose a topping"),
    blackOlives: yup.bool().oneOf([true], "Choose a topping"),
    roastedGarlic: yup.bool().oneOf([true], "Choose a topping"),
    artichokeHearts: yup.bool().oneOf([true], "Choose a topping"),
    threeCheese: yup.bool().oneOf([true], "Choose a topping"),
    pineapple: yup.bool().oneOf([true], "Choose a topping"),
    extraCheese: yup.bool().oneOf([true], "Choose a topping"),
});

export default function Pizza() {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    sizeChoice: "",
    specialInstructions: "",
    terms: false,
    garlicRanch: false,
    bbqSauce: "",
    spinachAlfredo: "",
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onion: false,
    greenPepper: false,
    dicedTomatoes: false,
    blackOlives: false,
    roastedGarlic: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    sizeChoice: "",
    specialInstructions: "",
    terms: "",
    garlicRanch: "",
    bbqSauce: "",
    spinachAlfredo: "",
    pepperoni: "",
    sausage: "",
    canadianBacon: "",
    spicyItalianSausage: "",
    grilledChicken: "",
    onion: "",
    greenPepper: "",
    dicedTomatoes: "",
    blackOlives: "",
    roastedGarlic: "",
    artichokeHearts: "",
    threeCheese: "",
    pineapple: "",
    extraCheese: ""
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
    // console.log("input changed!", e.target.value, e.target.checked);
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const formSubmit = e => {
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
        Name
        <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={inputChange}
        />
        {errorState.name.length > 0 ? (
          <p className="error">{errorState.name}</p>
        ) : null}
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={inputChange}
        />
        {errorState.email.length > 0 ? (
          <p className="error">{errorState.email}</p>
        ) : null}
      </label>
      <label htmlFor="specialInstructions">
        Special Instructions
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
        Choice of Size
        <select
          value={formState.sizeChoice}
          name="sizeChoice"
          id="sizeChoice"
          onChange={inputChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra Large">Extra Large</option>
        </select>
        {errorState.sizeChoice.length > 0 ? (
          <p className="error">{errorState.sizeChoice}</p>
        ) : null}
      </label>
      <label htmlFor="terms">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
        Terms & Conditions
        {errorState.terms.length > 0 ? (
          <p className="error">{errorState.terms}</p>
        ) : null}
      </label>
      <label>
        <input
          type="radio"
          id="garlicRanch"
          name="garlicRanch"
          checked={formState.garlicRanch}
          onChange={inputChange}
        />
        Garlic Ranch
        {errorState.garlicRanch.length > 0 ? (
          <p className="error">{errorState.garlicRanch}</p>
        ) : null}
      </label>
      <label>
        <input
          type="radio"
          id="bbqSauce"
          name="bbqSauce"
          checked={formState.bbqSauce}
          onChange={inputChange}
        />
        BBQ Sauce
        {errorState.bbqSauce.length > 0 ? (
          <p className="error">{errorState.bbqSauce}</p>
        ) : null}
      </label>
      <label>
        <input
          type="radio"
          id="spinachAlfredo"
          name="spinachAlfredo"
          checked={formState.spinachAlfredo}
          onChange={inputChange}
        />
        Spinach Alfredo
        {errorState.spinachAlfredo.length > 0 ? (
          <p className="error">{errorState.spinachAlfredo}</p>
        ) : null}
      </label>
      <label>
        <input
          type="checkbox"
          id="pepperoni"
          name="pepperoni"
          checked={formState.pepperoni}
          onChange={inputChange}
        />
        Pepperoni
        {errorState.pepperoni.length > 0 ? (
          <p className="error">{errorState.pepperoni}</p>
        ) : null}
      </label>
      <label>
        <input
          type="checkbox"
          id="sausage"
          name="sausage"
          checked={formState.sausage}
          onChange={inputChange}
        />
        Sausage
        {errorState.sausage.length > 0 ? (
          <p className="error">{errorState.sausage}</p>
        ) : null}
      </label>
      <label>
        <input
          type="checkbox"
          id="canadianBacon"
          name="canadianBacon"
          checked={formState.canadianBacon}
          onChange={inputChange}
        />
        Canadian Bacon
        {errorState.canadianBacon.length > 0 ? (
          <p className="error">{errorState.canadianBacon}</p>
        ) : null}
      </label>
      <label>
        <input
          type="checkbox"
          id="spicyItalianSausage"
          name="spicyItalianSausage"
          checked={formState.spicyItalianSausage}
          onChange={inputChange}
        />
        Spicy Italian Sausage
        {errorState.spicyItalianSausage.length > 0 ? (
          <p className="error">{errorState.spicyItalianSausage}</p>
        ) : null}
      </label>
      <label>
        <input
          type="checkbox"
          id="grilledChicken"
          name="grilledChicken"
          checked={formState.grilledChicken}
          onChange={inputChange}
        />
       Grilled Chicken
        {errorState.grilledChicken.length > 0 ? (
          <p className="error">{errorState.grilledChicken}</p>
        ) : null}
      </label>
      <label>
        <input
          type="checkbox"
          id="onion"
          name="onion"
          checked={formState.onion}
          onChange={inputChange}
        />
        Onion
        {errorState.onion.length > 0 ? (
          <p className="error">{errorState.onion}</p>
        ) : null}
      </label>
      <label>
        <input
          type="checkbox"
          id="greenPepper"
          name="greenPepper"
          checked={formState.greenPepper}
          onChange={inputChange}
        />
        Green Pepper
        {errorState.greenPepper.length > 0 ? (
          <p className="error">{errorState.greenPepper}</p>
        ) : null}
      </label>
      <label>
        <input
          type="checkbox"
          id="dicedTomatoes"
          name="dicedTomatoes"
          checked={formState.dicedTomatoes}
          onChange={inputChange}
        />
        Diced Tomatoes
        {errorState.dicedTomatoes.length > 0 ? (
          <p className="error">{errorState.dicedTomatoes}</p>
        ) : null}
      </label>
       <label>
         <input
           type="checkbox"
           id="blackOlives"
           name="blackOlives"
           checked={formState.blackOlives}
           onChange={inputChange}
         />
         Black Olives
         {errorState.blackOlives.length > 0 ? (
           <p className="error">{errorState.blackOlives}</p>
         ) : null}
       </label>
       <label>
       <input
         type="checkbox"
         id="roastedGarlic"
         name="roastedGarlic"
         checked={formState.roastedGarlic}
         onChange={inputChange}
       />
       Roasted Garlic
       {errorState.roastedGarlic.length > 0 ? (
         <p className="error">{errorState.roastedGarlic}</p>
       ) : null}
     </label>
     <label>
     <input
       type="checkbox"
       id="artichokeHearts"
       name="artichokeHearts"
       checked={formState.artichokeHearts}
       onChange={inputChange}
     />
     Artichoke Hearts
     {errorState.artichokeHearts.length > 0 ? (
       <p className="error">{errorState.artichokeHearts}</p>
     ) : null}
   </label>
   <label>
   <input
     type="checkbox"
     id="threeCheese"
     name="threeCheese"
     checked={formState.threeCheese}
     onChange={inputChange}
   />
   Three Cheese
   {errorState.threeCheese.length > 0 ? (
     <p className="error">{errorState.threeCheese}</p>
   ) : null}
 </label>
 <label>
         <input
           type="checkbox"
           id="pineapple"
           name="pineapple"
           checked={formState.pineapple}
           onChange={inputChange}
         />
         Pineapple
         {errorState.pineapple.length > 0 ? (
           <p className="error">{errorState.pineapple}</p>
         ) : null}
       </label>
       <label>
       <input
         type="checkbox"
         id="extraCheese"
         name="extraCheese"
         checked={formState.extraCheese}
         onChange={inputChange}
       />
       Extra Cheese
       {errorState.extraCheese.length > 0 ? (
         <p className="error">{errorState.extraCheese}</p>
       ) : null}
     </label>
      <button disabled={buttonDisabled}>Add to Order</button>
    </form>
  );
}
