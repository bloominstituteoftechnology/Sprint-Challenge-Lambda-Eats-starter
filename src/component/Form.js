import React, {useState}from "react";
import * as yup from "yup"
import axios from "axios"

const formSchema = yup.object().shape({
    name: yup.string().required(),
    size: yup.string(),
    mushroom: yup.string().oneOf([true]),
    olive: yup.string().oneOf([true]),
    pineapple: yup.string().oneOf([true]),
    sausage: yup.string().oneOf([true]),
    instructions: yup.string()
})

export default function Pizza() {

const [pizza,setPizza] =useState({
    name:"",
    mushroom:"",
    size:"",
    olive:"",
    pineapple:"",
    sausage:"",
    instructions:""



})

  return (
    <form>
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" />
      </label>
      <label htmlFor="size">
        Pizza Sizes
        <select id="size" name="size">
          <option value=" 6 slices">6 Slices</option>
          <option value=" 8 slices">8 Slices</option>
          <option value=" 10 slices">10 Slices</option>
          <option value=" 12 slices">12 Slices</option>
        </select>
      </label>
      <label htmlFor="mushroom">
        Mushroom:
        <input id="mushroom" name="mushroom" type="checkbox" />
      </label>
      <label htmlFor="olive">
        Olive
        <input id="olive" name="olive" type="checkbox" />
      </label>
      <label htmlFor="pineapple">
        Pineapple:
        <input id="pineapple" name="pineapple" type="checkbox" />
      </label>
      <label htmlFor="sausage">
        Olive:
        <input id="sausage" name="sausage" type="checkbox" />
      </label>
      <label htmlFor="instructions">
      Special nstructions
<textarea id="istructions" name="instructions"/>
      </label>
      <button type="submit">Add to Order</button>
    </form>
  );
}
