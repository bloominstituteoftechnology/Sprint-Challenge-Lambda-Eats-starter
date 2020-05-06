import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

export default function Form() {
    const toppings = [
        'Pepperoni',
        'Sausage',
        'Canadian Bacon',
        'Spicy Italian Sausage',
        'Grilled Chicken',
        'Onions',
        'Green Pepper',
        'Diced Tomatos',
        'Black Olives',
        'Roasted Garlic',
        'Artichoke Hearts',
        'Three Cheese',
        'Pineapple',
        'Extra Cheese',
    ];

    const sauces = [
        'Original Red',
        'Garlic Ranch',
        'BBQ Sauce',
        'Spinach Alfredo',
    ];

    const [post, setPost] = useState([]);

    const [formState, setFormState] = useState({
        name: '',
        size: '',
        sauce: '',
        toppings: '',
        instructions: '',
    });

    const [errors, setErrors] = useState({
        name: '',
    });

    const formValidate = yup.object().shape({
        name: yup.string().required('Your name is required'),
        size: yup.string(),
        sauce: yup.string(),
        // sauce: yup.boolean().oneOf([true]),
        toppings: yup.boolean(),
        instructions: yup.string(),
    });

    const validateChange = (e) => {
        yup.reach(formValidate, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setErrors({ ...errors, [e.target.name]: '' });
            })
            .catch((err) =>
                setErrors({ ...errors, [e.target.name]: err.errors[0] })
            );
    };

    useEffect(() => {
        formValidate.isValid(formState).then((valid) => {
            console.log('valid?', valid);
        });
    }, [formValidate]);

    const formSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://reqres.in/api/users', formState)
            .then((response) => {
                setPost(response.data);
                setFormState({
                    name: '',
                    size: '',
                    sauce: '',
                    toppings: '',
                    instructions: '',
                });
            })
            .catch((err) => console.log(err.response));
    };

    const inputChange = (e) => {
        console.log('input changed!', e.target.value);
        e.persist();
        const newFromData = {
            ...formState,
            [e.target.name]:
                e.target.type === 'checkbox'
                    ? e.target.checked
                    : e.target.value,
        };
        validateChange(e);
        setFormState(newFromData);
    };

    console.log(formState, 'hello');

    return (
        <div className='orderForm'>
            <h2>Create Your Own Pizza</h2>
            <form onSubmit={formSubmit}>
                <div className='recipient' htmlFor='name'>
                    <label>
                        Name:
                        <input
                            type='text'
                            name='name'
                            onChange={inputChange}
                            value={formState.name}
                            placeholder='Your name'
                        />
                        {errors.name.length > 2 ? (
                            <p className='error'>{errors.name}</p>
                        ) : null}
                    </label>
                </div>
                <h3>Choice of Size</h3>
                <p>
                    <em>Required</em>
                </p>
                <div className='size'>
                    <select>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                </div>
                <h3>Choice of Sauce</h3>
                <div className='sauces'>
                    {sauces.map((sauce) => (
                        <>
                            <div>
                                <label htmlFor='sauce'>
                                    <input
                                        type='checkbox'
                                        name='sauce'
                                        checked={formState.sauce.sauce} //need some var to put here that will change based on which sauce we click
                                        onChange={inputChange}
                                        value={sauce}
                                    />
                                    {sauce}
                                </label>
                            </div>
                        </>
                    ))}
                </div>
                <h3>Add Toppings</h3>
                <p>
                    <em>Choose up to 10</em>
                </p>
                <div className='toppings'>
                    {toppings.map((topping) => (
                        <>
                            <div>
                                <label htmlFor='toppings'>
                                    <input
                                        type='checkbox'
                                        name='toppings'
                                        checked={formState.toppings.topping}
                                        onChange={inputChange}
                                        value={formState.checked}
                                        className='check'
                                    />
                                    {topping}
                                </label>
                            </div>
                        </>
                    ))}
                </div>

                {/* <h3>Gluten Free Crust?</h3>
                <div></div> */}
                <h3>Special Instructions</h3>
                <div className='instructions'>
                    <textarea />
                </div>
                <div className='submit'>
                    <button>Submit Order</button>
                </div>
                <pre>{JSON.stringify(post, null, 2)}</pre>
            </form>
        </div>
    );
}
