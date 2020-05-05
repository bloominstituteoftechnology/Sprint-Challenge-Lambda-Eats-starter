import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Form(){

    const initialFormState = {
        name:"",
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

    const [serverError, setServerError] = useState("");

    const [formState, setFormState] = useState(initialFormState);

    const [isButtonDisabled, setIsButtonDisabled] =useState(true);

    const [errors, setErrors] = useState(initialFormState);

    const formSchema = Yup.object().shape({
        name: Yup.string().required("Name is required.").min(2, "Name must be at least 2 letters."),
        size: Yup.string().required("Must choose a size."),
        sauce: Yup.string().required("Must choose a sauce."),
        pepperoni: Yup.string(),
        sausage: Yup.string(),
        canadianbacon: Yup.string(),
        peppers: Yup.string(),
        olives: Yup.string(),
        veggies: Yup.string(),
        chicken: Yup.string(),
        pineapple: Yup.string(),
        subs: Yup.string().required("Do you want gluten free?"),
        special: Yup.string(),
        quantity: Yup.string().required("Must choose QTY of pizza."),
    });

    const validateChange= e => {
        Yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({...errors, [e.target.name]: ""});
            })
            .catch(err => {
                console.log("error", err);
                setErrors({...errors, [e.target.name]: err.console.errors[0]});
            });
    };

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log("valid?", valid);
            setIsButtonDisabled(!valid);
        });
    },[formState]);

    const formSubmit = e => {
        e.preventDefault();
        
        axios
            .post("https://reqres.in/api/users", formState)
            .then(response => {
                setPost(response.data);

                setFormState({
                    name:"",
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

                setServerError(null);
            })

            .catch(err => {
                setServerError("Something")
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
             {serverError ? <p className="error">{serverError}</p> : null}
            <label htmlFor="name">
                What Shall We Call You?
                    <input
                        name="name"
                        type="text"
                        onChange={inputChange}
                        value={formState.name}
                        data-cy="name"
                    />
                    {errors.name.length > 0 ? (<p className="error">{errors.name}</p> ): null}
            </label>

            <label htmlFor="size">
                Size
                <select id="size" name="size" onChange={inputChange}>
                    <option value="">-Choose your Size-</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Family">Family</option>
                </select>
                {errors.size.length > 0 ? (<p className="error">{errors.size}</p>) : null}
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
                {errors.sauce.length > 0 ? (<p className="error">{errors.sauce}</p>) : null}
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
                {errors.subs.length > 0 ? (<p className="error">{errors.subs}</p>) : null}
            </label>
      
            <label htmlFor="special">
                Any special instructions?
                    <textarea
                        name="special"
                        onChange={inputChange}
                        value={formState.special}
                        data-cy="special"
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
                {errors.quantity.length > 0 ? (<p className="error">{errors.quantity}</p>) : null}
            </label>

            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button type="submit">Place Order</button>
        </form>
    );
}