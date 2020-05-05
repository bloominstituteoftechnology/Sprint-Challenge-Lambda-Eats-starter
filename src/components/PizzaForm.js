import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import './styles/form.css'


/// Validate Pizza Form through Yup
const formSchema = yup.object().shape({
    name: yup.string().required("Listen..... we gotta have a name"),
    pizzasize: yup.string().required(`You have to pick a size, I'm not gonna do it for you`),
    sauce: yup.string().required("choose a sauce will ya?"),
    toppings: yup.string().required("destroy what is pure, will ya?"),
    howmany: yup.number().min(1).required('How many we getting guy?'),
    gluten: yup.string().required("yes..no?..pansy"),
    textarea: yup.string().required("now you want me to do extra? fine..."),
    terms: yup.boolean().oneOf([true], "please agree to terms of use")
});


export const PizzaForm = () =>{

        // can declare initialState once and use as initial state for form, for errors, and reset form
        const initialFormState = {
            name:"",
            pizzasize: "",
            sauce: "",
            toppings: "",
            howmany: "",
            gluten: "",
            textarea: "",
            terms: ""
        };

        // temporary state used to set state
        const [post, setPost] = useState([]);

        // server error
        const [serverError, setServerError] = useState("");

        // managing state for our form inputs
        const [formState, setFormState] = useState(initialFormState);

        // control whether or not the form can be submitted if there are errors in form validation
        const [isButtonDisabled, setIsButtonDisabled] = useState(true);

        // managing state for errors. empty unless inline validation (validateInput) updates key/value pair to have error
        // state for our errors
        const [errors, setErrors] = useState({
            name: "",
            pizzasize: "",
            sauce: "",
            toppings: "",
            howmany: "",
            gluten: "",
            textarea: "",
            terms: ""
        });

        // inline validation, validating one key/value pair
        const validateChange = e => {
            yup
                .reach(formSchema, e.target.name) // get the value out of schema at key "e.target.name" --> "name="
                .validate(e.target.value) // value in input
                .then(valid => {
                    // if passing validation, clear any error
                    setErrors({ ...errors, [e.target.name]: "" });
                })
                .catch(err => {
                    // if failing validation, set error in state
                    //console.log("error!", err);
                    setErrors({ ...errors, [e.target.name]: err.errors[0] });
                });
        };

        // whenever state updates, validate the entire form. if valid, then change button to be enabled.
        useEffect(() => {
            formSchema.isValid(formState).then(valid => {
                console.log("valid?", valid);
                setIsButtonDisabled(!valid);
            });
        }, [formState]);

        // onSubmit function
        const formSubmit = e => {
            e.preventDefault();

            // send out POST request with obj as second param, for us that is formState.
            axios
                .post("https://reqres.in/api/users", formState)
                .then(response => {
                    // update temp state with value to display
                    setPost(response.data);
                    //console.log(response.data)

                    // clear state, could also use 'initialState' here
                    setFormState({
                        name: "",
                        pizzasize: "",
                        sauce: "",
                        toppings: "",
                        howmany: "",
                        gluten: "",
                        textarea: "",
                        terms: ""
                    });

                    // clear any server error
                    setServerError(null);
                })
                .catch(err => {
                    // this is where we could create a server error in the form!
                    setServerError("oops! something happened!");
                });
        };


        // onChange function
        const inputChange = e => {
            e.persist(); // necessary because we're passing the event asyncronously and 
            //we need it to exist even after this function completes (which will complete before validateChange finishes)
            const newFormData = {
                ...formState,
                [e.target.name]:
                    e.target.type === "checkbox" ? e.target.checked : e.target.value
            }; // remember value of the checkbox is in "checked" and all else is "value"
            validateChange(e); // for each change in input, do inline validation
            setFormState(newFormData); // update state with new data
            console.log(e.target.name.howmany)
        };

        return (
            <div className="container">

                <form className="form-style-6" autoComplete="on" onSubmit={formSubmit}>
                    { serverError?<p className = "error">{ serverError }</p> : null}
                    
                        <h1>Build yer pizza:</h1>
                    <label htmlFor="name">
                        Name
                    <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={inputChange}
                    value={formState.name}
                        />
                        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
                    </label>
                    <label 
                    onChange={inputChange}
                    value={formState.pizzasize}
                    >Sizes
                    <select
                     htmlFor="pizzasize" 
                     id="pizzasize" 
                     name="pizzasize" 
                     onChange={inputChange}
                     >

                            <option value="">Select yer size</option>
                            <option value="xs">X-small - you want a bib with that?</option>
                            <option value="sm">Small - Enough for the kid</option>
                            <option value="md">Medium - for sissy men and women who rather a salad</option>
                            <option value="lg">Large - for the New Yorka in you</option>
                            <option value="xl">XL - for the Chi town in you and her</option>
                        </select>
                        {errors.pizzasize.length > 0 ? (
                            <p className="error">{errors.pizzasize}</p>
                        ) : null}
                        {console.log(errors.pizzasize)}
                    </label>
                    <label htmlFor="sauce">
                        <h2>Choice of sawwwce [sauce]</h2>
                        <input checked={formState.sauce} onChange={inputChange} name="sauce" type="radio" value="marinara" /> Marinara <br/>
                        <input checked={formState.sauce} onChange={inputChange} name="sauce" type="radio" value="garlic-pesto" /> Garlic &amp; Pesto <br />
                        <input checked={formState.sauce} onChange={inputChange} name="sauce" type="radio" value="marinara" /> White sauce <br />
                        <input checked={formState.sauce} onChange={inputChange} name="sauce" type="radio" value="bbq" /> BBQ Sauce...eeeelllll <br />
                    </label>
                        <label id="toppings" htmlFor="toppings">
                            <h2>Add topings... and messup a perfectly fine pizza</h2>
                        <div className="topping-flex">
                        <ul className="topping-1">
                                <li><input name="toppings" onChange={inputChange} type="checkbox" value="Pepperoni" /> Pepperoni</li>
                                <li><input name="toppings" onChange={inputChange} type="checkbox" value="Sausage" /> Sausage</li>
                                <li><input name="toppings" onChange={inputChange} type="checkbox" value="Sausage" /> Beef Bacon</li>
                                <li><input name="toppings" onChange={inputChange} type="checkbox" value="Spicy italian sausage" /> Spicy italian sausage</li>
                                <li><input name="toppings" onChange={inputChange} type="checkbox" value="Grilled Chicken" /> Grilled Chicken</li>

                        </ul>
                        
                        <ul className="topping-2" >
                                <li><input name="toppings" onChange={inputChange} type="checkbox" value="Veggies" /> Veggies</li>
                                <li><input name="toppings" onChange={inputChange} type="checkbox" value="Pineapple ..ppffttt" /> Pineapple ..ppffttt</li>
                                <li><input name="toppings" onChange={inputChange} type="checkbox" value="Mo' cheese" /> Mo' cheese</li>
                                <li><input name="toppings" onChange={inputChange} type="checkbox" value="Roasted Garlic" /> Roasted Garlic</li>
                                <li><input name="toppings" onChange={inputChange} type="checkbox" value="Grilled Onions" /> Grilled Onions</li>

                        </ul>
                        </div>
                        {errors.toppings.length > 0 ? (
          <p className="error">{errors.toppings}</p>
        ) : null}
                    </label>
                        <h2>Substitute for gluten free, hipster?</h2>
                    <label 
                    className="switch" 
                    onChange={inputChange}
                    >
                            <input 
                            id="gluten" 
                            type="checkbox" 
                            name="gluten" 
                            value="gluten"
                            /> 
                            <span className="slider"></span>
                        {errors.gluten.length > 0 ? (
                            <p className="error">{errors.gluten}</p>
                        ) : null}
                            </label>

                    <label htmlFor="textarea">
                        
                     <textarea
                            placeholder="Anything else?"
                            name="textarea"
                            onChange={inputChange}
                            value={formState.textarea}
                        />
                        {errors.textarea.length > 0 ? (
                            <p className="error">{errors.textarea}</p>
                        ) : null}
                    </label>
                        <div className="amount-btn-tos">
                        <label 
                        htmlFor="howmany" 
                        onChange={inputChange}
                        >How many wouldya like darling?
                            <input 
                            type="number" 
                            name="howmany" 
                            id="howmany" 
                            name="howmany" 
                            step="1" 
                            onChange={inputChange}
                            value={formState.howmany}
                            />
                            {errors.howmany === 0 ? (
                                <p className="error">{errors.howmany}</p>
                            ) : null}
                        </label>
                            <button disabled={isButtonDisabled} type="submit">
                                Submit
      </button>
                            <input 
                            type="checkbox" 
                            name="terms" 
                            checked={formState.terms} 
                            onChange={inputChange}
                            />
                            {JSON.stringify(post, 'http://localhost.3000', 2)}

                        </div>
                  
                </form>
                
            </div>
        )
    
}

export default PizzaForm