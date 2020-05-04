import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from "yup";

//procedimiento schema
const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),
    size: yup.string().required("Must Select a Size"),
    pepperoni: yup.boolean().defined(),
    canadian: yup.boolean().defined(),
    mushrooms: yup.boolean().defined(),
    peppers: yup.boolean().defined(),
    sausage: yup.boolean().defined(),
    echesse: yup.boolean().defined(),
    specInstr: yup.string().notRequired()
});

export default function Form() {

    //los estados 
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        pepperoni: false,
        mushrooms: false,
        peppers: false,
        sausage: false,
        canadian: false,
        echesse: false,
        specInstr: ""
    })
    //crear error
    const [errors, setErrors] = useState({
        name: "",
        size: "",
        pepperoni: "",
        canadian: "",
        mushrooms: "",
        peppers: "",
        sausage: "",
        echesse: "",
        specInstr: ""
    })
    //usestate para boton
    const [buttonDisabled, setButtonDisabled] = useState(false);
    //usestate post
    const [post, setPost] = useState([]);

    //inputchanges

    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        };

        validateChange(e);
        setFormState(newFormData);
    };
    //button
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [formState]);
    //validate changes
    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                });
            });
    };
    //boton enviar 
    const formSubmit = e => {
        e.preventDefault();
        axios
            .post("https://reqres.in/api/users?page=2", formState)
            .then(res => {
                setPost(res.data);
                console.log("success", post);
                console.log(res.data.size)
                setFormState({
                    name: "",
                    size: res.data.size,
                    pepperoni: false,
                    canadian: false,
                    mushrooms: false,
                    peppers: false,
                    sausage: false,
                    echesse: false,
                    specInstr: ""
                });
            })
            .catch(err => console.log(err.response));

    };
    //CallBack Function for alert
    const sent = (e) => {
        e.preventDefault();
        alert("Order Sent Thanks for your Purchase")
    }
    //returning form  
    return (


        <form onSubmit={formSubmit}>
            <h1>Build Your Own Pizza</h1>
            <label htmlFor='name'>
                Customer's Name
                <br />
                <input
                    type='text'
                    name='name'
                    id='nameinput'
                    placeholder='Name'
                    value={formState.name}
                    onChange={inputChange}
                />
                {errors.name.length > 5 ? <p className="error">{errors.name}</p> : null}

            </label>
            <br />

            <label htmlFor='size'>
                Choice of Size
                <br />
                <select name='size' id='sizeinput' onChange={inputChange}>
                    <option name="default" value={null}></option>
                    <option name="Sm" value='small'>Small</option>
                    <option name="Md" value='medium'>Medium</option>
                    <option name="Lg" value='large'>Large</option>
                    <option name="XL" value='extraL'>Extra Large</option>
                </select>
            </label>
            <br />


            <div className='toppingsChecklist'>

                <p>Select Toppings</p>

                <label htmlFor='pepperoni'>
                    <input
                        type='checkbox'
                        name='pepperoni'
                        id='pepperoniCheckBox'
                        checked={formState.pepperoni}
                        onChange={inputChange}
                    />
                    Pepperoni
                </label>
                <br />

                <label htmlFor='sausage'>
                    <input
                        type='checkbox'
                        name='sausage'
                        id='sausageCheckBox'
                        checked={formState.sausage}
                        onChange={inputChange}
                    />
                    Sausage
                </label>
                <br />

                <label htmlFor='canadian'>
                    <input
                        type='checkbox'
                        name='canadian'
                        id='canadianCheckBox'
                        checked={formState.canadian}
                        onChange={inputChange}
                    />
                    Canadian Bacon
                </label>
                <br />

                <label htmlFor='mushrooms'>
                    <input
                        type='checkbox'
                        name='mushrooms'
                        id='mushroomsCheckBox'
                        checked={formState.mushrooms}
                        onChange={inputChange}
                    />
                    Mushrooms
                </label>
                <br />

                <label htmlFor='peppers'>
                    <input
                        type='checkbox'
                        name='peppers'
                        id='peppersCheckBox'
                        checked={formState.peppers}
                        onChange={inputChange}
                    />
                    Peppers
                </label>
                <br />


                <label htmlFor='echesse'>
                    <input
                        type='checkbox'
                        name='echesse'
                        id='echesseCheckBox'
                        checked={formState.echesse}
                        onChange={inputChange}
                    />
                    Extra Chesse
                </label>
                <br />



            </div>
            <br />

            <label htmlFor='Special Instructions'>
                Special Instructions
                <br /><br />
                <textarea
                    name='specInstr'
                    id='specInstrInput'
                    placeholder='Extra Requirements...'
                    value={formState.specInstr}
                    onChange={inputChange}
                />
            </label>
            <br />
            <button name='submit' onSubmit={sent} disabled={buttonDisabled}>Submit</button>
            <pre>{JSON.stringify(post, null, 2)}</pre>

        </form>

    )

}