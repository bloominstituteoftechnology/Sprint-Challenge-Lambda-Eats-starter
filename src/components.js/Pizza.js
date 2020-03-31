import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import pizza_boxes from "./pizza_boxes.jpg"
import './Pizza.css';
import styled from "styled-components";

const formSchema = yup.object().shape({
  name: yup.string().min(2, 'come on, your name is longer than that!'),
  pizza_size: yup.string().oneOf(['XS', 'S', 'M','L',"XL"], "Do you want a pizza, or not?")
  // veggies: yup.boolean().oneOf([true], 'I know you want the veggies'),
  // Pineapple: yup.boolean().oneOf([true], 'I know you want the Pineappple'),
  // BBQ: yup.boolean().oneOf([true], 'I know you want the BBQ'),
  // Bacon: yup.boolean().oneOf([true], 'I know you want the Bacon'),
  // special_instructions: yup.string().required('I am a robot, i need to know where to leave the pizza'),
});
// styles
let Background = styled.div `
{
  background: url(${pizza_boxes}) no-repeat center center fixed; 
  background-size: cover;    
  height:100vh;
  overflow-y:hidden;
}
`
const Pizza = () => {
  //set state for form inputs
  const [formValues, setFormValues] = useState({
    name: '',
    pizza_size: '',
    veggies: "",
    Bacon: "",
    Pineapple: "",
    BBQ: "",
    special_instructions: ''
  });
  // state for errors
  const [errors, setErrors] = useState({
    name: '',
    pizza_size: '',
    // veggies: '',
    // Bacon: '',
    // Pineapple: '',
    // BBQ: '',
    // special_instructions: '',
  });
  // state for submit button
  const [disableButton, setDisableButton] = useState(true);
  //state for post request
  const [post, setPost] = useState([]);
  //activate button
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisableButton(!valid);
    });
  }, [formValues]);
  //validaton and change
  function validateChange(e) {
    yup
      .reach(formSchema,  (e.target.type === "checkbox" || e.target.type === "textarea") ? null : e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({ ...errors, [e.target.name]: '' });
      })
      .catch(err => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  }

  function inputChange(e) {
    e.persist();
    const updatedData = {
      ...formValues,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormValues(updatedData);
  }
  // post data  on Submit
  function submitForm(e) {
    e.preventDefault();
    // setFormValues([...])
    axios
      .post('https://reqres.in/api/users', formValues)
      .then(response => {
        setPost(response.data);

        setFormValues({
          name: '',
          pizza_size: '',
          veggies: '',
          Bacon: '',
          Pineapple: '',
          BBQ: '',
          special_instructions: '',
        });
      })
      .catch(error => console.log(error.response));
  }

  return (
    <Background>
      <Link to="/">Home</Link>

      <form onSubmit={submitForm}>
        <label htmlFor="Name">
          Customer Name:
          <input name="name" value={formValues.name} onChange={inputChange} />
          {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
        </label>
        <br />
        <label htmlFor="Pizza Size">
          Pizza Size:
          <select name="pizza_size" onChange={inputChange}>
          <option> Select a Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          {errors.pizza_size.length > 0 ? <p className="error">{errors.pizza_size}</p> : null}
        </label>
        <br />
        <label htmlFor="toppings" className="toppings">
          <input
            type="checkbox"
            name="veggies"
            checked={formValues.veggies}
            value={formValues.veggies}
            onChange={inputChange}
          />
          veggies
        </label>
        <br />
        <label htmlFor="toppings" className="toppings">
          <input
            type="checkbox"
            name="Bacon"
            checked={formValues.Bacon}
            value={formValues.Bacon}
            onChange={inputChange}
          />
          Bacon
        </label>{' '}
        <br />
        <label htmlFor="toppings" className="toppings">
          <input
            type="checkbox"
            name="Pineapple"
            checked={formValues.Pineapple}
            value={formValues.Pineapple}
            onChange={inputChange}
          />
          Pineapple
        </label>
        <br />
        <label htmlFor="toppings" className="toppings">
          <input type="checkbox" name="BBQ" checked={formValues.BBQ} value={formValues.BBQ} onChange={inputChange} />
          BBQ
        </label>
        <label>
          <br />
          Special Instructions:
          <br />
          <textarea type= "textarea" name="special_instructions" value={formValues.special_instructions} onChange={inputChange} />
        </label>
        <br />
        <pre>{JSON.stringify(post, null, 2)}</pre>
        <button disabled={disableButton}>Submit Order</button>
      </form>
    </Background>
  );
};

export default Pizza;
