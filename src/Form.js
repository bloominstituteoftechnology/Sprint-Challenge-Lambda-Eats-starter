import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const H2Div = styled.div``;

const PizzaDiv = styled.div`
  width: 70%;
`;
const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    sauce: "",
    pepperoni: "",
    sausage: "",
    bacon: "",
    chicken: "",
    instructions: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    sauce: "",
    pepperoni: "",
    sausage: "",
    bacon: "",
    chicken: "",
    instructions: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState("");
  const [post, setPost] = useState([]);
  const [total, setTotal] = useState(10);

  let formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is a required field"),
    size: yup.string().required("Please select a size"),
    sauce: yup
      .string()
      .oneOf(["original", "bbq", "garlic", "spinach"])
      .required(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    chicken: yup.boolean(),
    instructions: yup.string(),
  });

  useEffect(() => {
    console.log("form state change");
    formSchema.isValid(formState).then((valid) => {
      console.log("valid?", valid);
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    validateChange(e);
    setFormState(newFormData);
  };

  const validateChange = (e) => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          // if there was an error, clear it since value is valid
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          // add error by name of input since value breaks validation
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setPost(res.data); // get just the form data from the REST api
        console.log("success", post);
        // reset form if successful
        setFormState({
          name: "",
          email: "",
          terms: "",
          positions: "",
          motivation: "",
        });
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <FormDiv>
      <PizzaDiv>
        <H2Div>
          <img
            alt="pizza-banner"
            className="pizza-banner"
            src="https://st2.depositphotos.com/1000528/8776/i/950/depositphotos_87764256-stock-photo-ham-pizza-close-up-letterbox.jpg"
          />
        </H2Div>
        <form onSubmit={formSubmit} className="form-div">
          <div className="pizza-heading">
            <h2>Build Your Own Pizza</h2>
          </div>

          <label htmlFor="name" className="input-label">
            <div className="input-head-div">
              <h2>Name</h2>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              onChange={inputChange}
              value={formState.name}
              data-cy="name"
            />
            {errors.name.length > 0 ? (
              <p className="error">{errors.name}</p>
            ) : null}
          </label>

          <label htmlFor="size" className="input-label">
            <div className="input-head-div">
              <h2>Choice of Size</h2>
            </div>

            <select
              id="size"
              name="size"
              className="input"
              onChange={inputChange}
              value={formState.size}
              data-cy="size"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </label>

          <label className="input-label">
            <div className="input-head-div">
              <h2>Choice of Sauce</h2>
            </div>
            <label htmfFor="original-red">
              <input
                type="radio"
                id="original-red"
                name="sauce"
                onChange={inputChange}
                value="original"
              />
              Original Red
            </label>

            <label htmfFor="garlic">
              <input
                type="radio"
                name="sauce"
                onChange={inputChange}
                value="garlic"
              />
              Garlic Ranch
            </label>

            <label htmfFor="bbq">
              <input
                type="radio"
                name="sauce"
                onChange={inputChange}
                value="bbq"
              />
              BBQ Sauce
            </label>

            <label htmfFor="spinach">
              <input
                type="radio"
                name="sauce"
                onChange={inputChange}
                value="spinach"
              />
              Spinach Alfredo
            </label>
          </label>

          <label htmlFor="toppings" className="input-label">
            <div className="input-head-div">
              <h2>Add Toppings</h2>
              <p>Required</p>
            </div>
            <div className="toppings">
              <label htmlFor="pepperoni">
                <input
                  type="checkbox"
                  id="pepperoni"
                  name="pepperoni"
                  onChange={inputChange}
                  checked={formState.pepperoni}
                />
                Pepperoni
              </label>
              <br />
              <label htmlFor="sausage">
                <input
                  type="checkbox"
                  id="sausage"
                  name="sausage"
                  onChange={inputChange}
                  checked={formState.sausage}
                />
                Sausage
              </label>
              <br />
              <label htmlFor="bacon">
                <input
                  type="checkbox"
                  id="bacon"
                  name="bacon"
                  onChange={inputChange}
                  checked={formState.bacon}
                />
                Canadian Bacon
              </label>
              <br />

              <br />
              <label htmlFor="chicken">
                <input
                  type="checkbox"
                  id="chicken"
                  name="chicken"
                  onChange={inputChange}
                  checked={formState.chicken}
                />
                GrIlled Chicken
              </label>
              <br />
            </div>
          </label>

          <label htmlFor="instructions" className="input-label">
            <div className="input-head-div">
              <h2>Special Intructions</h2>
            </div>
            <textarea
              id="instructions"
              name="instructions"
              placeholder="Anything else you would like to add?"
              value={formState.instructions}
              onChange={inputChange}
            />
            {errors.instructions.length > 0 ? (
              <p className="error">{errors.instructions}</p>
            ) : null}
          </label>
          <pre>{JSON.stringify(post, null, 2)}</pre>
          <button type="submit" disabled={buttonDisabled}>
            <div>Add To Order</div> <div> ${total}</div>
          </button>
          <form />
        </form>
      </PizzaDiv>
    </FormDiv>
  );
};

export default Form;
