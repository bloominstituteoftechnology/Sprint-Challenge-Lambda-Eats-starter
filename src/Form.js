import Axios from "axios";
import React, {useState} from "react";

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

    return (
        <div className="form-page">
            <div className="form-top">
                <h2>Build Your Own Pizza</h2>
            </div>
            <div className="form-container">
                <form onSubmit={submitForm}>
                <label htmlFor="name">Name</label><input type="text" id="name" name="name"></input>
                <br/><br/>

                <label htmlFor="size">Choice of Size</label><br/>
                <select id="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <br/><br/>

                <label htmlFor="sauce">Choice of Sauce</label><br/>
                    <input type="radio" name="sauce" id="original"/><label htmlFor="original">Original Red</label><br/>
                    <input type="radio" name="sauce" id="ranch"/><label htmlFor="ranch">Garlic Ranch</label><br/>
                    <input type="radio" name="sauce"id="bbq"/><label htmlFor="bbq">BBQ Sauce</label><br/>
                    <input type="radio" name="sauce" id="alfredo"/><label htmlFor="alfredo">Spinach Alfredo</label><br/>
                <br/>

                <label htmlFor="toppings">Add Toppings</label><br/>
                    <input type="checkbox" name="toppings" id="pepperoni"></input><label htmlFor="pepperoni">Pepperoni</label><br/>
                    <input type="checkbox" name="toppings" id="sausage"></input><label htmlFor="sausage">Sausage</label><br/>
                    <input type="checkbox" name="toppings" id="bacon"></input><label htmlFor="bacon">Bacon</label><br/>
                    <input type="checkbox" name="toppings" id="chicken"></input><label htmlFor="chicken">Chicken</label><br/>
                    <input type="checkbox" name="toppings" id="onions"></input><label htmlFor="onions">Onions</label><br/>
                    <input type="checkbox" name="toppings" id="peppers"></input><label htmlFor="peppers">Peppers</label><br/>
                    <input type="checkbox" name="toppings" id="mushrooms"></input><label htmlFor="mushrooms">Mushrooms</label><br/>
                    <input type="checkbox" name="toppings" id="olives"></input><label htmlFor="olives">Olives</label><br/>
                    <input type="checkbox" name="toppings" id="spinach"></input><label htmlFor="spinach">Spinach</label><br/>
                    <input type="checkbox" name="toppings" id="artichoke"></input><label htmlFor="artichoke">Artichoke</label><br/>
                    <input type="checkbox" name="toppings" id="pineapple"></input><label htmlFor="pineapple">Pineapple</label><br/>
                    <input type="checkbox" name="toppings" id="tomatoes"></input><label htmlFor="tomatoes">Tomatoes</label><br/>
                <br/>

                <label htmlFor="instructions">Special Instructions?</label><br/>
                <input type="textarea" id="instructions" name="instructions"></input>
                <br/><br/>

                <button type="submit">Submit</button>

                </form>
            </div>
        </div>
        
        
    )
}

