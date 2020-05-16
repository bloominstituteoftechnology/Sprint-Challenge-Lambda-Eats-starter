import React, { useState, useEffect } from 'react'
import * as yup from "yup";
import axios from "axios";


const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Must include email address"),
  motivation: yup.string().required("Must include why you'd like to join"),
  position: yup.string(),
  terms: yup.boolean().oneOf([true], "Please agree to terms of use"),
  sauce: yup.bool().oneOf([true], "Choose a sauce")
});

export default function Pizza() {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    motivation: "",
    position: "",
    terms: false,
    sauce: false
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
    motivation: "",
    position: "",
    terms: "",
    sauce: ""
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
      <label htmlFor="motivation">
        Why would you like to help?
        <textarea
          name="motivation"
          id="motivation"
          value={formState.motivation}
          onChange={inputChange}
        />
        {errorState.motivation.length > 0 ? (
          <p className="error">{errorState.motivation}</p>
        ) : null}
      </label>
      <label htmlFor="positions">
        What would you like to help with?
        <select
          value={formState.position}
          name="position"
          id="positions"
          onChange={inputChange}
        >
          <option value="Newsletter">Newsletter</option>
          <option value="Yard Work">Yard Work</option>
          <option value="Administrative Work">Administrative Work</option>
          <option value="Tabling">Tabling</option>
        </select>
        {errorState.position.length > 0 ? (
          <p className="error">{errorState.position}</p>
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
          type="checkbox"
          id="sauce"
          name="sauce"
          checked={formState.sauce}
          onChange={inputChange}
        />
        sauce
        {errorState.sauce.length > 0 ? (
          <p className="error">{errorState.sauce}</p>
        ) : null}
      </label>
      <button disabled={buttonDisabled}>Submit</button>
    </form>
  );
}
