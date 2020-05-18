import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

// const formSchema = yup.object().shape({
//     name: yup.string().required(),
//     size: yup.string(),
//     mushroom: yup.string().oneOf([true]),
//     olive: yup.string().oneOf([true]),
//     pineapple: yup.string().oneOf([true]),
//     sausage: yup.string().oneOf([true]),
//     instructions: yup.string()
// })

export default function Pizza() {
  const [forms, setForms] = useState({
    name: "",
    size: "",
    mushroom: false,
    olive: "",
    pineapple: "",
    sausage: "",
    instructions: "",
  });

  const changeHandler = (event) => {
    console.log("input changed", event.target.value, event.target.checked);
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setForms({ ...forms, [event.target.name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          value={forms.name}
          onChange={changeHandler}
        />
      </label>
      <label htmlFor="size">
        Pizza Sizes
        <select
          id="size"
          name="size"
          value={forms.size}
          onChange={changeHandler}
        >
          <option value=" 6 slices">6 Slices</option>
          <option value=" 8 slices">8 Slices</option>
          <option value=" 10 slices">10 Slices</option>
          <option value=" 12 slices">12 Slices</option>
        </select>
      </label>
      <label htmlFor="mushroom">
        Mushroom:
        <input
          id="mushroom"
          name="mushroom"
          type="checkbox"
          checked={forms.mushroom}
          onChange={changeHandler}
        />
      </label>
      <label htmlFor="olive">
        Olive
        <input
          id="olive"
          name="olive"
          type="checkbox"
          checked={forms.olive}
          onChange={changeHandler}
        />
      </label>
      <label htmlFor="pineapple">
        Pineapple:
        <input
          id="pineapple"
          name="pineapple"
          type="checkbox"
          checked={forms.pineapple}
          onChange={changeHandler}
        />
      </label>
      <label htmlFor="sausage">
        Olive:
        <input
          id="sausage"
          name="sausage"
          type="checkbox"
          checked={forms.sausage}
          onChange={changeHandler}
        />
      </label>
      <label htmlFor="instructions">
        Special nstructions
        <textarea
          id="istructions"
          name="instructions"
          value={forms.instructions}
          onChange={changeHandler}
        />
      </label>
      <button type="submit">Add to Order</button>
    </form>
  );
}
