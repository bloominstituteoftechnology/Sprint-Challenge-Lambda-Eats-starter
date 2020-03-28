import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  sizes: yup.string().required("Must Select a Size"),
  pepperoni_topping: yup.boolean().defined(),
  olive_topping: yup.boolean().defined(),
  pineapple_topping: yup.boolean().defined(),
  onion_topping: yup.boolean().defined(),
  bellpepper_topping: yup.boolean().defined(),
  instructions: yup.string().notRequired()
});

export default function Form() {

  const [formState, setFormState] = useState({
    name: "",
    sizes: "",
    pepperoni_topping: false,
    olive_topping: false,
    pineapple_topping: false,
    onion_topping: false,
    bellpepper_topping: false,
    instrucions: ""
  })

  const [errors, setErrors] = useState ({
    name: "",
    sizes: "",
    pepperoni_topping: "",
    olive_topping: "",
    pineapple_topping: "",
    onion_topping: "",
    bellpepper_topping: "",
    instrucions: ""
  })

  const [post, setPost] = useState([]);


const formSubmit = e => {
  e.preventDefault();
  axios
    .post("https://reqres.in/api/users", formState)
    .then(res => {
      setPost(res.data);
      console.log("success", post);
      console.log(res.data.size)
      setFormState({
          name: "",
          size: res.data.size,
          pepperoni_topping: false,
          olive_topping: false,
          pineapple_topping: false,
          onion_topping: false,
          bellpepper_topping: false,
          instructions: ""
      });
    })
    .catch(err => console.log(err.response));
};

  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
  };



const inputChange = e => {
  e.persist();
  const newFormData = {
    ...formState,
    [e.target.name]:
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    };
    validateChange(e);
    setFormState(newFormData);
}

// useEffect(() => {
//   formSchema.isValid(formState).then(valid => {
//     setButtonDisabled(!valid);
//   });
// }, [formState]);






return (
  <form onSubmit={formSubmit}>
    <h2>Place an order.</h2>
    <label htmlFor="name">
      Name
      <input
        id="name"
        type="text"
        name="name"
        value={formState.name}
        onChange={inputChange}
      />
      {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
    </label>
    <label htmlFor="sizes">
      What size would you like?
        <select id="sizes" name="sizes" onChange={inputChange}>
        <option value="small"> Small - 8 inch</option>
        <option value="medium"> Medium - 10 inch</option>
        <option value="large"> Large - 15 inch</option>
      </select>
    </label>
    <label htmlFor="toppings"/>
      <p>Select your toppings!</p>
      <label>Pepperoni</label>
      <input
        type="checkbox"
        name="pepperoni_topping"
        checked={formState.pepperoni_topping}
        onChange={inputChange}
      />
      <label>Olives</label>
      <input
        type="checkbox"
        name="olive_topping"
        checked={formState.olive_topping}
        onChange={inputChange}
      />
       <label>Pineapple</label>
      <input
        type="checkbox"
        name="pineapple_topping"
        checked={formState.pineapple_topping}
        onChange={inputChange}
      />
        <label>Onion</label>
      <input
        type="checkbox"
        name="onion_topping"
        checked={formState.onion_topping}
        onChange={inputChange}
      />
        <label>Bell Pepper</label>
      <input
        type="checkbox"
        name="bellpepper_topping"
        checked={formState.bellpepper_topping}
        onChange={inputChange}
      />
      <label htmlFor= "instructions"/>
        Any special instructions?
        <textarea
        id="instructions"
        name="instructions"
        value={formState.instructions}
        onChange={inputChange}
        />


        <button name= "submit" type = 'submit'>Submit</button>
        <pre>{JSON.stringify(post, null, 2)}</pre>

  </form>
)
}
