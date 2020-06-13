import React, { useState } from 'react';
import axios from 'axios';

export default function Form(props){
    const [formState, setFormState] = useState({
        name: '',
        size: 'S',
        toppings : [],
        special_instructions: ''
    })
    const inputChange = e => {
        setFormState({...formState, [e.target.name]: e.target.value});
        if(e.target.type === "checkbox"){
            setFormState({...formState, toppings : e.target.name})
        }
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
            toppings : '',
            special_instructions: ''
        })
        })
    }
    const [post, setPost] = useState([]); 
    return(
        <div>
            <h1>Build Your Own Pizza</h1>
            <form onSubmit={formSubmit}>
                <h2>Toppings</h2>
                <label htmlFor="pepperoni">Pepperoni
                    <input 
                    type="checkbox"
                    name="pepperoni"
                    id="pepperoni"
                    onChange={inputChange} />
                </label>
                <h3>Additional Instructions</h3>
                <textarea
                placeholder="Any additional instructions? Add them here:"
                onChange={inputChange}
                name="special_instructions"
                value={formState.special_instructions}></textarea>
                <br/>
                <button type='submit'>Add to Order</button>
                <pre>{JSON.stringify(post, null, 2)}</pre>
            </form>
        </div>
    )
}