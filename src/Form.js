import Axios from "axios";
import React, {useState} from "react";
import * as yup from "yup";

export default function Form(props){
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        sauce:"",
        toppings: [""],
        instructions: ""
    });

    const submitForm = e => {
        e.preventDefault();
        props.addPizza(formState);
        setFormState({name:"", email:"", password:"", terms:false});
        Axios
            .post("https://reqres.in/api/users", formState)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    };

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required("Name is a required field")
            .min(2)
            .max(20),
        size: yup
            .string()
          .required("Must choose a size"),
        sauce: yup
            .string()
            .required("Must choose a sauce"),
        toppings: yup.string(),
        instructions: yup.string()
      });

      const [errorState, setErrorState] = useState({
        name: "",
        size: "",
        sauce:"",
        toppings: [""],
        instructions: ""
      });
    
    const validate = e => {
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
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

    const inputChange = e => {
        e.persist();
        // console.log("input changed!", e.target.value, e.target.checked);
        validate(e);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
      };

    return (
        <div className="form-page">
            <div className="form-top">
                <h2>Build Your Own Pizza</h2>
            </div>
            <div className="form-container">
                <form onSubmit={submitForm}>
                <label htmlFor="name">Name</label>
                <input 
                onChange={inputChange}
                type="text" 
                id="name" 
                name="name"
                placeholder="Pizza the Hut"
                required
                value={formState.name}
                />
                <br/>

                <label htmlFor="size">Choice of Size</label><br/>
                <select id="size">
                    <option value={formState.size}>Small</option>
                    <option value={formState.size}>Medium</option>
                    <option value={formState.size}>Large</option>
                </select>
                <br/><br/>

                <label htmlFor="sauce">Choice of Sauce</label><br/>
                    <input type="radio" name="sauce" id="original" value={formState.sauce}/><label htmlFor="original">Original Red</label><br/>
                    <input type="radio" name="sauce" id="ranch" value={formState.sauce}/><label htmlFor="ranch">Garlic Ranch</label><br/>
                    <input type="radio" name="sauce"id="bbq" value={formState.sauce}/><label htmlFor="bbq">BBQ Sauce</label><br/>
                    <input type="radio" name="sauce" id="alfredo" value={formState.sauce}/><label htmlFor="alfredo">Spinach Alfredo</label><br/>
                <br/>

                <label htmlFor="toppings">Add Toppings</label><br/>
                    <input type="checkbox" name="toppings" id="pepperoni" value={formState.toppings}></input><label htmlFor="pepperoni">Pepperoni</label><br/>
                    <input type="checkbox" name="toppings" id="sausage" value={formState.toppings}></input><label htmlFor="sausage">Sausage</label><br/>
                    <input type="checkbox" name="toppings" id="bacon" value={formState.toppings}></input><label htmlFor="bacon">Bacon</label><br/>
                    <input type="checkbox" name="toppings" id="chicken" value={formState.toppings}></input><label htmlFor="chicken">Chicken</label><br/>
                    <input type="checkbox" name="toppings" id="onions" value={formState.toppings}></input><label htmlFor="onions">Onions</label><br/>
                    <input type="checkbox" name="toppings" id="peppers" value={formState.toppings}></input><label htmlFor="peppers">Peppers</label><br/>
                    <input type="checkbox" name="toppings" id="mushrooms" value={formState.toppings}></input><label htmlFor="mushrooms">Mushrooms</label><br/>
                    <input type="checkbox" name="toppings" id="olives" value={formState.toppings}></input><label htmlFor="olives">Olives</label><br/>
                    <input type="checkbox" name="toppings" id="spinach" value={formState.toppings}></input><label htmlFor="spinach">Spinach</label><br/>
                    <input type="checkbox" name="toppings" id="artichoke" value={formState.toppings}></input><label htmlFor="artichoke">Artichoke</label><br/>
                    <input type="checkbox" name="toppings" id="pineapple" value={formState.toppings}></input><label htmlFor="pineapple">Pineapple</label><br/>
                    <input type="checkbox" name="toppings" id="tomatoes" value={formState.toppings}></input><label htmlFor="tomatoes">Tomatoes</label><br/>
                <br/>

                <label htmlFor="instructions">Special Instructions?</label><br/>
                <input 
                type="textarea" 
                id="instructions" 
                name="instructions" 
                value={formState.instructions}
                onChange={inputChange}
                />
                <br/><br/>

                <button type="submit">Submit</button>

                </form>
            </div>
        </div>
        
        
    )
}

