import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const Pizza = () => {

    const initialState = {
        name: "",
        size: "",
        sauce: "",
        toppings: "",
        substitute: "",
        instructions: "",
        quantity: "",
        add: ""
    }

    const [formState, setFormState] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    const [post, setPost] = useState([]);    
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    
    const formSchema = yup.object().shape({
        name: yup.string().required("Name is a required field."),
        size: yup.string().required("Please choose a size"),
        instructions: yup.string().required("Please add special instructions."),
        quantity: yup.string().required("Please choose a quantity"),
    });

    const validateChange = event => {
        yup.reach(formSchema, event.target.name).validate(event.target.value).then(valid => {
            setErrors({ ...errors, [event.target.name]: "" });
        })
        .catch(err => {
            console.log("Error!!!", err);
            setErrors({ ...errors, [event.target.name]: err.errors[0] });
        });
    };

    console.log("error state", errors);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log("Is this valid?!?", valid);
            setIsButtonDisabled(!valid);
        });
    }, []);

    const formSubmit = event => {
        event.preventDefault();
        axios.post("https://reqres.in/api/users", formState)
        .then(response => {
            setPost(response.data);
            setFormState({
                name: "",
                size: "",
                sauce: "",
                toppings: "",
                substitute: "",
                instructions: "",
                quantity: "",
                add: ""
            });
        })
        .catch(err => console.log(err.response))
    };

    const inputChange = event => {
        console.log("Input has changed!", event.target.value);
        event.persist();
        const newFormData = {
        ...formState, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        };
        validateChange(event);
        setFormState(newFormData);
    };

    return (
        <form onSubmit={formSubmit}>
            <div htmlFor="name">
                Name
                <input id="name" type="text" name="name" onChange={inputChange} value={formState.name} data-cy="name" />
                {errors.name.length > 0 ? (<p className="error">{errors.name}</p>) : null}
            </div>

            <div htmlFor="size">
                Choose a Size
                <select id="size" name="size" onChange={inputChange}>
                    <option value="">--Please choose a size--</option>
                    <option value="Personal">Personal</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="X-Large">X-Large</option>
                </select>
                {errors.size.length > 0 ? (<p className="error">{errors.size}</p>) : null}}
            </div>

            <div htmlFor="sauce">
                Choose a Sauce
                <input type="radio" name="sauce" id="original" onChange={inputChange} value={formState.sauce}>Original Red</input>
                <input type="radio" name="sauce" id="garlic" onChange={inputChange} value={formState.sauce}>Garlic Ranch</input>
                <input type="radio" name="sauce" id="bbq" onChange={inputChange} value={formState.sauce}>BBQ Sauce</input>
                <input type="radio" name="sauce" id="alfredo" onChange={inputChange} value={formState.sauce}>Spinach Alfredo</input>\
                <input type="radio" name="sauce" id="none" onChange={inputChange} value={formState.sauce}>No sauce</input>                
            </div>

            <div htmlFor="toppings">
                Add Toppings
                <input  type="checkbox" name="toppings" id="pepperoni" checked={formState.terms} onChange={inputChange}>Pepperoni</input>
                <input  type="checkbox" name="toppings" id="sausage" checked={formState.terms} onChange={inputChange}>Sausage</input>
                <input  type="checkbox" name="toppings" id="canadians" checked={formState.terms} onChange={inputChange}>Canadian Bacon</input>
                <input  type="checkbox" name="toppings" id="bacon" checked={formState.terms} onChange={inputChange}>Regular Bacon</input>
                <input  type="checkbox" name="toppings" id="italian" checked={formState.terms} onChange={inputChange}>Italian Sausage</input>
                <input  type="checkbox" name="toppings" id="chicken" checked={formState.terms} onChange={inputChange}>Grilled Chicken</input>
                <input  type="checkbox" name="toppings" id="onions" checked={formState.terms} onChange={inputChange}>Onions</input>
                <input  type="checkbox" name="toppings" id="mushrooms" checked={formState.terms} onChange={inputChange}>Mushrooms</input>
                <input  type="checkbox" name="toppings" id="peppers" checked={formState.terms} onChange={inputChange}>Green Peppers</input>
                <input  type="checkbox" name="toppings" id="olives" checked={formState.terms} onChange={inputChange}>Black Olives</input>
                <input  type="checkbox" name="toppings" id="artichokes" checked={formState.terms} onChange={inputChange}>Artichoke Hearts</input>
                <input  type="checkbox" name="toppings" id="pineapples" checked={formState.terms} onChange={inputChange}>Pineapple</input>
            </div>


            <div htmlFor="instructions">
                Name
                <input id="instructions" type="text" name="instructions" onChange={inputChange} value={formState.name} data-cy="instructions" />
                {errors.instructions.length > 0 ? (<p className="error">{errors.instructions}</p>) : null}
            </div>

            <div htmlFor="quantity">
                Choose a Quantity
                <select id="quantity" name="quantity" onChange={inputChange}>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    <option value="mile">5280</option>
                </select>
                {errors.quantity.length > 0 ? (<p className="error">{errors.quantity}</p>) : null}}
            </div>

            <pre>{JSON.stringify(post, null, 2)}</pre>

            <button disabled={isButtonDisabled} type="add">Add to Order</button>
        </form>
    ); 
}

export default Pizza;