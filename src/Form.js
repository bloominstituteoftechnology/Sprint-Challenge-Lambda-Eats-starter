import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';

export default function Form(props){
    const [formState, setFormState] = useState({
        name: '',
        size: 'S',
        pepperoni: false,
        sausage: false,
        olives: false,
        none: false,
        special_instructions: ''
    })
    const inputChange = e => {
            e.persist();
            setFormState({
                ...formState, 
                [e.target.name]: e.target.value === 'toppings' ? e.target.checked : e.target.value
            })
            validation(e);
    };
    const [errors, setErrors] = useState({
        name: '',
        size: '',
        pepperoni: '',
        sausage: '',
        olives: '',
        none: '',
        special_instructions: '',
    })
    const formSchema = yup.object().shape({
        name: yup.string().min(3, 'Name must be more than two characters').required('Name is required'),
        size:   yup.string().oneOf(['S', 'M', 'L']),
        pepperoni: yup.boolean().oneOf([true]),
        sausage: yup.boolean().oneOf([true]),
        olives: yup.boolean().oneOf([true]),
        none: yup.boolean().oneOf([true]),
        special_instructions: yup.string()
    })
    const validation = e => {
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(inputIsValid => {
            console.log(inputIsValid)
            setErrors({
                ...errors, 
                [e.target.name]: ''
            })
        })
        .catch(err => {
            console.log(err)
            setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
            })
        })
        console.log(errors)
    } 
    const formSubmit = e => {
        e.preventDefault();
        axios
        .post('https://reqres.in/api/users', formState)
        .then(res => {
            setPost(res.data);
        setFormState({
            name: '',
            size: '',
            pepperoni: false,
            sausage: false,
            olives: false,
            none: false,
            special_instructions: '',
            })
        })
    }
    const [post, setPost] = useState([]); 
    return(
        <div>
            <h1>Build Your Own Pizza</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor='name'>
                    <input
                    type='text'
                    name='name'
                    cy-data='name'
                    id='name'
                    placeholder='Enter your name'
                    value={formState.name} 
                    onChange={inputChange} />
                </label>
                {errors.name.length > 0 ? (<p className='error'>{errors.name}</p>): null}
                <select
                onChange={inputChange}
                value={formState.size}
                name="size">Pizza Size
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                </select>
                <br/>
                <h2>Toppings</h2>
                <label>Pepperoni
                    <input 
                    type='checkbox'
                    cy-data='pepperoni'
                    name='pepperoni'
                    value='toppings'
                    onChange={inputChange} />
                </label>
                <br/>
                <label>Sausage
                    <input 
                    type='checkbox'
                    cy-data='sausage'
                    name='sausage'
                    value='toppings'
                    onChange={inputChange} />
                </label>
                <br/>
                <label>Olives
                    <input 
                    type='checkbox'
                    cy-data='olives'
                    name='olives'
                    value='toppings'
                    onChange={inputChange} />
                </label>
                <br/>
                <label>None (Just Cheese)
                    <input 
                    type='checkbox'
                    cy-data='none'
                    name='none'
                    value='toppings'
                    onChange={inputChange} />
                </label>
                <br/>
                <h3>Additional Instructions</h3>
                <textarea
                placeholder="Any additional instructions? Add them here:"
                onChange={inputChange}
                name="special_instructions"
                value={formState.special_instructions}></textarea>
                <br/>
                <button type='submit' cy-data='submit'>Add to Order</button>
                <pre>{JSON.stringify(post, null, 2)}</pre>
            </form>
        </div>
    )
}