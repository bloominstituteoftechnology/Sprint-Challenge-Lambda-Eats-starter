import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form(){

    const initialFormState = {
        size: "",
        sauce: "",
        pepperoni: false,
        sausage: false,
        canadianbacon: false,
        peppers: false,
        olives: false,
        veggies: false,
        chicken: false,
        pineapple: false,
        subs: "",
        special:"",
        quantity: "",
    };

    const [post, setPost] = useState([]);

    const [formState, setFormState] = useState(initialFormState);

    const formSubmit = e => {
        e.preventDefault();
        
        axios
            .post("h", formState)
            .then(response => {
                setPost(response.data);

                setFormState({
                    size: "",
                    sauce: "",
                    pepperoni: false,
                    sausage: false,
                    canadianbacon: false,
                    peppers: false,
                    olives: false,
                    veggies: false,
                    chicken: false,
                    pineapple: false,
                    subs: "",
                    special:"",
                    quantity: "",
                });

            })
    }

    const inputChange = e => {
        e.persist();

        const newFormData ={
            ...formState,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        // validateChange(e);
        setFormState(newFormData);
    };

    return(
        <form onSubmit={formSubmit}>
            <label htmlFor="size">
                Size
                <select id="size" name="size" onChange={inputChange}>
                    <option value="">-Choose your Size-</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Family">Family</option>
                </select>
            </label>

            <label htmlFor="sauce">
                Sauce
                <select id="sauce" name="sauce" onChange={inputChange}>
                    <option value="">-Choose your Sauce-</option>
                    <option value="Marinara">Marinara</option>
                    <option value="BBQ">BBQ</option>
                    <option value="Alfredo">Alfredo</option>
                    <option value="Pink">Pink</option>
                </select>
            </label>

            <div className="Pizza Toppings">
                <h2>Pizza Toppings</h2>
                <label htmlFor="pepperoni">
                    Pepperoni
                    <input 
                        type="checkbox"
                        name="pepperoni"
                        checked={formState.pepperoni}
                        onChange={inputChange}
                    />
                </label>

                <label htmlFor="sausage">
                    Sausage
                    <input 
                        type="checkbox"
                        name="sausage"
                        checked={formState.sausage}
                        onChange={inputChange}
                    />
                </label>

                <label htmlFor="canadianbacon">
                    Canadian Bacon
                    <input 
                        type="checkbox"
                        name="canadianbacon"
                        checked={formState.canadianbacon}
                        onChange={inputChange}
                    />
                </label>

                <label htmlFor="peppers">
                    Peppers
                    <input 
                        type="checkbox"
                        name="peppers"
                        checked={formState.peppers}
                        onChange={inputChange}
                    />
                </label>

                <label htmlFor="olives">
                    Olives
                    <input 
                        type="checkbox"
                        name="olives"
                        checked={formState.olives}
                        onChange={inputChange}
                    />
                </label>

                <label htmlFor="veggies">
                    Veggies
                    <input 
                        type="checkbox"
                        name="veggies"
                        checked={formState.veggies}
                        onChange={inputChange}
                    />
                </label>

                <label htmlFor="chicken">
                    Chicken
                    <input 
                        type="checkbox"
                        name="chicken"
                        checked={formState.chicken}
                        onChange={inputChange}
                    />
                </label>

                <label htmlFor="pineapple">
                    Pineapple
                    <input 
                        type="checkbox"
                        name="pineapple"
                        checked={formState.pineapple}
                        onChange={inputChange}
                    />
                </label>
            </div>

            <label htmlFor="subs">
                Gluten
                <select id="subs" name="subs" onChange={inputChange}>
                    <option value="">-Choose your Option-</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>
      
            <label htmlFor="special">
                Any special instructions?
                    <textarea
                        name="special"
                        onChange={inputChange}
                        value={formState.special}
                    />
            </label>

            <label htmlFor="quantity">
                How Many?
                <select id="quantity" name="quantity" onChange={inputChange}>
                    <option value="">-Choose your Servings-</option>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                </select>
            </label>

            <button type="submit">Place Order</button>
        </form>
    )
}