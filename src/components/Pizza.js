import React, { useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';

function Pizza() {
    const [post, setPost] = useState({});
    const initialState = {size: "", sauce: "", toppings: [] };
    const [pizza, setPizza] = useState(initialState);

    const [errors, setErrors] = useState(initialState);

    const formSchema = yup.object().shape({
        size: yup.mixed().required("Size is required"),
        sauce: yup.mixed().required("Sauce is required"),
        toppings: yup.array().max(10, "Maximum 10 items")
    });

    useEffect(() => {
        console.log("Checking is form Valid?");
        formSchema.isValid(pizza).then(isFormValid => {
            console.log("Is form Valid?", isFormValid);
        });
           
    }, [pizza, formSchema])

    const handleSubmit = event => {
        event.preventDefault();
        axios
            .post("https://reqres.in/api/users", pizza)
            .then(res => {
                setPost(res.data);
                setPizza(initialState);
            })
                .catch(error => console.log("Error", error));
    };
    
    const validateChange = event => {
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(inputIsValid => {
                setErrors({ ...errors, [event.target.name]: ""
             });
            })
            .catch(error => {
                setErrors({ ...errors, [event.target.name]: error.errors[0]
                });
                console.log("Error:", errors);
            });
    };

    const handleChange = event => {
        event.persist();
        console.log("Input Changed:", event.target.value);
        console.log("Input that fired event:", event.target.name);
    
        const newPizza = {
            ...pizza, [event.target.name]: event.target.value
        };
        validateChange(event);
        setPizza(newPizza);
    };

  return (
    <div className="container">
        <div className="form">
        <form onSubmit={handleSubmit}>
            <h1>Build Your Own Pizza</h1>
            <div className="header">
                <h2>Choice of Size</h2>
                <p>Required</p>
            </div>
            <div>
                <select id="size" name="size" onChange={handleChange} value={pizza.size} >
                    <option value="">Select</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Xtra Large</option>
                </select>
                {errors.size.length > 0 ? <p className="error">{errors.size}</p> : null}
            </div>
            <div className="header">
                <h2>Choice of Sauce</h2>
                <p>Required</p>
            </div>
            <div>
                <label><input type="radio" id="red" name="sauce" value="red" onChange={handleChange} />Original Red</label><br />
                <label><input type="radio" id="ranch" name="sauce" value="ranch" onChange={handleChange} />Garlic Ranch</label><br />
                <label><input type="radio" id="bbq" name="sauce" value="bbq" onChange={handleChange} />BBQ Sauce</label><br />
                <label><input type="radio" id="alfredo" name="sauce" value="alfredo" onChange={handleChange} />Spinach Alfredo</label>
                {errors.sauce.length > 0 ? <p className="error">{errors.sauce}</p> : null}
            </div>
            <div className="header">
                <h2>Add Toppings</h2>
                <p>Choose up to 10</p>
            </div>
            <div className="check">
                <label><input type="checkbox" id="pepperoni" name="toppings[]" value="pepperoni" onChange={handleChange} />Pepperoni</label>
                <label><input type="checkbox" id="tomatoes" name="toppings[]" value="tomatoes" onChange={handleChange} />Diced Tomatoes</label>
                <label><input type="checkbox" id="sausage" name="toppings[]" value="sausage" onChange={handleChange} />Sausage</label>
                <label><input type="checkbox" id="olives" name="toppings[]" value="olives" onChange={handleChange} />Black Olives</label>
                <label><input type="checkbox" id="canadian" name="toppings[]" value="canadian" onChange={handleChange} />Canadian Bacon</label>
                <label><input type="checkbox" id="garlic" name="toppings[]" value="garlic" onChange={handleChange} />Roasted Garlic</label>
                <label><input type="checkbox" id="spicy sausage" name="toppings[]" value="spicy sausage" onChange={handleChange} />Spicy Italian Sausage</label>
                <label><input type="checkbox" id="artichoke" name="toppings[]" value="artichoke" onChange={handleChange} />Artichoke Hearts</label>
                <label><input type="checkbox" id="chicken" name="toppings[]" value="chicken" onChange={handleChange} />Grilled Chicken</label>
                <label><input type="checkbox" id="3 cheese" name="toppings[]" value="3 cheese" onChange={handleChange} />Three Cheese</label>
                <label><input type="checkbox" id="onions" name="toppings[]" value="onions" onChange={handleChange} />Onions</label>
                <label><input type="checkbox" id="pineapple" name="toppings[]" value="pineapple" onChange={handleChange} />Pineapple</label>
                <label><input type="checkbox" id="g pep" name="toppings[]" value="g pep" onChange={handleChange} />Green Pepper</label>
                <label><input type="checkbox" id="x cheese" name="toppings[]" value="x cheese" onChange={handleChange} />Extra Cheese</label>
                {errors.toppings.length > 0 ? <p className="error">{errors.toppings}</p> : null}
            </div>
            <div className="header">
                <h2>Choice of Substitute</h2>
                <p>Choose up to 1</p>
            </div>
            <div>
                <label><input type="checkbox" />Gluten Free Crust (+ $1.00)</label>
            </div>
            <div className="header">
                <h2>Special Instructions</h2>
            </div>
            <div><textarea cols="40" rows="5" placeholder="Anything else you would like to add?" /></div>
                    <br /><br /><hr />
        <button type="submit" onChange={handleSubmit}>Add to Order</button>
        <br /><br />
        console.log(errors);
        <pre>{JSON.stringify(post, null, 2)}</pre>
        </form>

        </div>
    </div>
  );
}

export default Pizza;