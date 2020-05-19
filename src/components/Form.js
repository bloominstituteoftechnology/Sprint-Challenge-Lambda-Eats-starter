import React, { useState } from "react";

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    sizes: "large",
  });

  const inputChange = (e) => {
    e.persist();
    console.log("input changed!", e.target.value, e.target.checked);
    // validate(e);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Pizza ordered!");
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

      <div className="sizeComponent">
        <form>
          Size
          <select
            id="sizes"
            name="sizes"
            value={formState.sizes}
            onChange={inputChange}
          >
            <option value="large"> Large</option>
            <option value="medium"> Medium </option>
            <option value="small"> Small </option>
            <option value="personalPizza"> Personal </option>
          </select>
        </form>
      </div>

      <div className="sauceComponent">
        <h3> Choose your sauce </h3>
        <label htmlFor="marinara">
          <input
            type="checkbox"
            id="marinara"
            name="marinara"
            checked={formState.marinara}
            onChange={inputChange}
          ></input>
          Marinara
        </label>
        <label htmlFor="whiteGarlic">
          <input
            type="checkbox"
            id="whiteGarlic"
            name="whiteGarlic"
            checked={formState.whiteGarlic}
            onChange={inputChange}
          ></input>
          White Garlic
        </label>
        <label htmlFor="pesto">
          <input
            type="checkbox"
            id="pesto"
            name="pesto"
            checked={formState.pesto}
            onChange={inputChange}
          ></input>
          Pesto
        </label>
        <label htmlFor="bbq">
          <input
            type="checkbox"
            id="bbq"
            name="bbq"
            checked={formState.bbq}
            onChange={inputChange}
          ></input>
          Barbecue
        </label>
        </div>

      <button>Submit</button>
    </form>
  );
}
