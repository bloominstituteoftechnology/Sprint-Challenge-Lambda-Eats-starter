import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
    name: yup.string().min(2).required("Whats your name?"),
    pizza_size: yup.string(),
        veggies: yup.boolean().oneOf([true], "I know you want the veggies"),
        Pineapple: yup.boolean().oneOf([true], "I know you want the Pineappple"),
        BBQ: yup.boolean().oneOf([true], "I know you want the BBQ"),
        Bacon: yup.boolean().oneOf([true], "I know you want the Bacon"),
    special_instructions: yup.string().required("I am a robot, i need to know where to leave the pizza")
});

const Pizza = () => {
  //set state for form inputs
  const [formValues, setFormValues] = useState({
    name: '',
    pizza_size: '',
    veggies: '',
    Bacon: '',
    Pineapple: '',
    BBQ: '',
    special_instructions: ''
  });
  // state for errors
  const [errors, setErrors] = useState({
    name: '',
    pizza_size: '',
    veggies: '',
    Bacon: '',
    Pineapple: '',
    BBQ: '',
    special_instructions: ''
  })
  // state for submit button
  const [disableButton, setDisableButton] = useState(true);
  //state for post request
  const [post, setPost] = useState([]);
  //activate button 
  useEffect(() => {
      formSchema.isValid(formValues).then(valid => {
          setDisableButton(!valid);
      })
  }, [formValues])
  //validaton and change
function validateChange(e){
    yup
    .reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
        setErrors({...errors, [e.target.name]: ""})
    })
.catch(err => {
    setErrors({...errors,[e.target.name]:err.errors[0]})
})
};

function inputChange(e){
    e.persist();
    const updatedData = {
        ...formValues, [e.target.name]:e.target.type === 'checkbox' ? e.target.checked : e.target.value
    };
validateChange(e);
setFormValues(updatedData)
}
// post data on screen on Submit
function onSubmit(e){
e.preventDefault();
axios
.post("https://reqres.in/api/users", formValues)
.then(response => {
    setPost(response.data)

    setFormValues({
        name: '',
        pizza_size: '',
        veggies: '',
        Bacon: '',
        Pineapple: '',
        BBQ: '',
        special_instructions: ''
    })
})
.catch(err => alert(err.response))
}

  return (
    <div>
      <Link to="/">Home</Link>

      <form>
        <label htmlFor="Name">
          Customer Name:
          <input name = "name"/>
         {errors.name.length > 0 ? <p className= "error">{errors.name}</p> : null}
        </label>
        <br />
        <label htmlFor="Pizza Size">
          Pizza Size:
          <select id="size" name="pizza_size">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <optipon value="M">M</optipon>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </label>
        <br />
        <label htmlFor="toppings" className="toppings">
          <input type="checkbox" name="veggies" checked={formValues.veggies} onChange={inputChange}/>
          veggies
        </label>
        <br />
        <label htmlFor="toppings" className="toppings">
          <input type="checkbox" name="Bacon" checked={formValues.Bacon} onChange={inputChange}/>
          Bacon
        </label>{' '}
        <br />
        <label htmlFor="toppings" className="toppings">
          <input type="checkbox" name="Pineapple" checked={formValues.Pineapple} onChange={inputChange}/>
          Pineapple
        </label>
        <br />
        <label htmlFor="toppings" className="toppings">
          <input type="checkbox" name="BBQ" checked={formValues.BBQ} onChange={inputChange}/>
          BBQ
        </label>
        <label>
          <br />
          Special Instructions:
          <br />
          <textarea name="special_instructions" />
        </label>
        <br />
        <pre>{JSON.stringify(post, null, 2)}</pre>
        <button disabled={disableButton}>Add to order</button>
      </form>
    </div>
  );
};

export default Pizza;
