import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { Form } from "./Styles";

const Pizza = () => {

    const initialFormState = {
        name: "",
        size: "",
        sauce: "",
        toppings: "",
    //     substitute: "",
        instructions: "",
        quantity: "",
    }

    const [formState, setFormState] = useState(initialFormState);
    const [errors, setErrors] = useState(initialFormState);
    const [post, setPost] = useState([]);    
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    
    const formSchema = yup.object().shape({
        name: yup.string().required("Name is a required field."),
        size: yup.string().required("Please pick a size"),
        instructions: yup.string(),
        quantity: yup.string().required("Please pick a quantity"),
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
    }, [formState]);

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
                // substitute: "",
                instructions: "",
                quantity: "",
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
            <Form>
                <h1>Build a Pizza</h1>

                <label htmlFor="name">
                    Name
                    <input id="name" type="text" name="name" onChange={inputChange} value={formState.name} data-cy="name" />
                    {errors.name.length > 0 ? (<p className="error">{errors.name}</p>) : null}
                </label>

                <label htmlFor="size">
                    Pick a Size
                    <select id="size" name="size" onChange={inputChange}>
                        <option value="">--Please choose a size--</option>
                        <option value="Personal">Personal</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="X-Large">X-Large</option>
                    </select>
                {errors.size.length > 0 ? (<p className="error">{errors.size}</p>) : null}
                </label>

                <label htmlFor="sauce">
                    Choose a Sauce
                    <input type="radio" name="original" id="original" data-cy="original"/>Original Red
                    <input type="radio" name="garlic" id="garlic" data-cy="garlic"/>Garlic Ranch
                    <input type="radio" name="bbq" id="bbq" data-cy="bbq"/>BBQ Sauce
                    <input type="radio" name="alfredo" id="alfredo" data-cy="alfredo"/>Spinach Alfredo
                    <input type="radio" name="none" id="none" data-cy="none" />No sauce       
                </label>

                <label htmlFor="toppings">
                Select Toppings
                    <input  type="checkbox" name="pepperoni" data-cy="pepperoni" />Pepperoni
                    <input  type="checkbox" name="sausage" data-cy="sausage" />Sausage
                    <input  type="checkbox" name="canadians" data-cy="canadians" />Canadian Bacon
                    <input  type="checkbox" name="bacon" data-cy="bacon" />Regular Bacon
                    <input  type="checkbox" name="italians" data-cy="italians" />Italian Sausage
                    <input  type="checkbox" name="chicken" data-cy="chicken" />Grilled Chicken
                    <input  type="checkbox" name="onions" data-cy="onions" />Onions
                    <input  type="checkbox" name="mushrooms" data-cy="mushrooms" />Mushrooms
                    <input  type="checkbox" name="peppers" data-cy="peppers" />Green Peppers
                    <input  type="checkbox" name="olives" data-cy="olives" />Black Olives
                    <input  type="checkbox" name="artichokes" data-cy="artichokes" />Artichoke Hearts
                    <input  type="checkbox" name="pineapple" data-cy="pineapple" />Pineapple
                </label>

                <label htmlFor="instructions">
                    Special Instructions
                    <textarea name="instructions" onChange={inputChange} value={formState.instructions} />
                    {errors.instructions.length > 0 ? (<p className="error">{errors.instructions}</p>) : null}
                </label>

                <label htmlFor="quantity">
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
                </label>

                <pre>{JSON.stringify(post, null, 2)}</pre>

                <button disabled={isButtonDisabled} type="submit">Add to Order</button>
            </Form>
        </form>

    );
}

export default Pizza;   