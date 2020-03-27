import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup.string().min(2).required("please enter a Name longer than 2 characters."),
    sauce: yup.string(),
    size: yup.string(),
    pepperoni: yup.boolean().oneOf([true, false]),
    sausage: yup.boolean().oneOf([true, false]),
    canadian: yup.boolean().oneOf([true, false]),
    spicy: yup.boolean().oneOf([true, false]),
    chicken: yup.boolean().oneOf([true, false]),
    instructions: yup.string().max(500),
})


const PizzaMaker = () => {
    const [addDisabled, setAddDisabled] = useState(true)

    const [formValues, setFormvalues] = useState({
        name: "",
        size: "",
        sauce: "",
        pepperoni: false,
        sausage: false,
        canadian: false,
        spicy: false,
        chicken: false,
        instructions: "",

    })

    const [post, setPost] = useState([]);

    const [error, setError] = useState({
        name: "",
        size: "",
        sauce: "",
        pepperoni: "",
        sausage: "",
        canadian: "",
        spicy: "",
        chicken: "",
        instructions: "",
    })

    useEffect(() => {
        formSchema.isValid(formValues).then(valid => {
            setAddDisabled(!valid);
        })
    }, [formValues]);

    const onFormSubmit = event => {
        event.preventDefault();
        axios.post("https://reqres.in/api/users", formValues)
            .then(res => {
                setPost(res.data);


                setFormvalues({
                    name: "",
                    size: "",
                    sauce: "",
                    pepperoni: false,
                    sausage: false,
                    canadian: false,
                    spicy: false,
                    chicken: false,
                    instructions: "",

                })
                   
            })
            .catch(err => console.log("POST error:", err.res))
    }

    const validateChange = event => {
        yup.reach(formSchema, event.target.name)
            .validate(event.target.type === "checkbox" ? event.target.checked : event.target.value)
            .then(valid => {
                setError({
                    ...error,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                console.log(err)
                setError({
                    ...error,
                    [event.target.name]: err.errors[0]
                })
            })
    }



    const inputChange = event => {
        event.persist();
        const newFormData = {
            ...formValues, [event.target.name]:
                event.target.type === "checkbox" ? event.target.checked : event.target.value
        };

        validateChange(event)
        setFormvalues(newFormData);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="Name for Order">
                Name for Order
            <input
                    data-cy= "nameArea"
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={inputChange}
                />
                {error.name.length > 0 ? <p>{error.name}</p> : null}

            </label><br />

            <label htmlFor="size choice">
                Choose Your Size
        <select name="size" data-cy="size" onChange={inputChange}>
                    <option value="select">Select</option>
                    <option value="8in">8in</option>
                    <option value="12in">12in</option>
                    <option value="18in">18in</option>
                </select>
                
            </label><br />
            <label htmlFor="sauce choice">
                Choose Your Sauce
        <select name="sauce" data-cy="sauce" onChange={inputChange}>
                    <option value="select">Select</option>
                    <option value="marinara">Marinara</option>
                    <option value="BBQ">BBQ</option>
                    <option value="Alfredo">Alfredo</option>
                </select>
            </label><br />
            <label>
                Choose Your Toppings
        </label><br />
            <label htmlFor="Pepperoni">
                <input
                    data-cy= "pepperoni"
                    name="pepperoni"
                    type="checkbox"
                    checked={formValues.pepperoni}
                    onChange={inputChange}
                />
            Pepperoni
            

        </label>
            <label htmlFor="Sausage">
                <input
                    data-cy="sausage"
                    name="sausage"
                    type="checkbox"
                    checked={formValues.sausage}
                    onChange={inputChange}
                />
            Sausage

        </label><br />

            <label htmlFor="Canadian Bacon">
                <input
                    data-cy="canadian"
                    name="canadian"
                    type="checkbox"
                    checked={formValues.canadian}
                    onChange={inputChange}
                />
            Canadian Bacon

        </label>

            <label htmlFor="Spicy Italian Sausage">
                <input
                    data-cy="spicy"
                    name="spicy"
                    type="checkbox"
                    checked={formValues.spicy}
                    onChange={inputChange}
                />
            Spicy Italian Sausage

        </label><br />

            <label htmlFor="Grilled Chiken">
                <input
                    data-cy="chicken"
                    name="chicken"
                    type="checkbox"
                    checked={formValues.chicken}
                    onChange={inputChange}
                />
            Grilled Chiken

        </label><br />

            <label htmlFor="special instructions">
                Special Instructions
            <input
                    data-cy="instructions"
                    name="instructions"
                    type="text"
                    value={formValues.instructions}
                    onChange={inputChange}
                />

            </label><br />
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button data-cy="addButton" disabled={addDisabled}>Add to Order</button>

        </form>

    )

}

export default PizzaMaker