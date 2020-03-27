import React, { useState, useEffect } from "react";

export default function Form() {
  const {formState, setFormState} = useState({
    name: "",
    sizes: "",
    pepperoni_topping: "",
    olive_topping: "",
    pineapple_topping: "",
    onion_topping: "",
    bellpepper_topping: "",


  })
}

return (
  <form onSubmit={formSubmit}>
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
      <label htmlFor="toppings">
        Select your toppings!
        <label>Pepperoni</label>
            <input
              type="checkbox"
              name="pepperoni_topping"
            />
            <label>Olives</label>
            <input
              type="checkbox"
              name="olive_topping"
            />

      </label>
      <pre>{JSON.stringify}</pre>
      <button disabled={buttonDisabled}>Submit</button>
   </form>
