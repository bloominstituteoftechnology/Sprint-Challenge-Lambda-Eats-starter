import React,{useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import Header from "../Components/Header2";



export default function Form(props){

    const history = useHistory();

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required("Please enter name")
            .min(2,"Name must be longer than 2 characters"),
        size: yup
            .string(),
        pepperoni: yup
            .boolean(),
        sausage: yup.boolean(),
        onions: yup.boolean(),
        pineapple: yup.boolean(),
        instructions: yup.string()


    });
    const [formState,setFormState] = useState({
        name:"",
        size:"Medium",
        pepperoni:false,
        sausage:false,
        onions:false,
        pineapple:false,
        instructions:"",
        amount:0,
    });

    const [errorState, setErrorState] = useState({
        name: "",
        size:"",
        sauce:""
    });

    const validate = e =>{
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrorState({
                    ...errorState,[e.target.name]:""
                });
            })
            .catch(err =>{
                setErrorState({
                    ...errorState, [e.target.name]:err.errors[0]
                });
            })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted!");
        axios
            .post("https://reqres.in/api/users", formState)
            .then(response => {
                props.setOrder([...props.order,response.data]);
                console.log(response.data);
                history.push('/order');
            })
            .catch(err => console.log(err));
    };

    const [total, setTotal] = useState(0);

    const addTotal = (x) =>{
        setTotal(total + x);
    }

    const inputChange = e =>{
        e.persist();
        validate(e);
        let value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({...formState, [e.target.name]:value});
        console.log(formState[e.target.name])
    }

    return(

        <>
        <Header head="You order that pizza" tail="you deserve it"/>

        <form onSubmit={formSubmit} className="pizzaForm" >

            <label htmlFor="name">

                Name

                <input
                    type="text"
                    name="name"
                    id = "name"
                    value = {formState.name}
                    onChange={inputChange}
                />

            </label>

            {errorState.name.length > 2 ? (
                <p className="error">{errorState.name}</p>
            ) : null}

            <label htmlFor="size">
                   Choice of Size

                <select
                    name="size"
                    id="size"
                    value={formState.size}
                    onChange={inputChange}
                    >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>

                </select>

            </label>

            <label htmlFor="pepperoni">

                <input
                    type ="checkbox"
                    id = "pepperoni"
                    name = "pepperoni"
                    checked ={formState.pepperoni}
                    onChange={inputChange}
                />

                Pepperoni

            </label>

            <label htmlFor="sausage">

                <input
                    type ="checkbox"
                    id = "sausage"
                    name = "sausage"
                    checked ={formState.sausage}
                    onChange={inputChange}
                />

                Sausage

            </label>

            <label htmlFor="onions">

                <input
                    type ="checkbox"
                    id = "onions"
                    name = "onions"
                    checked ={formState.onions}
                    onChange={inputChange}
                />

                Onions

            </label>

            <label htmlFor="pineapple">

                <input
                    type ="checkbox"
                    id = "pineapple"
                    name = "pineapple"
                    checked ={formState.pineapple}
                    onChange={inputChange}
                />

                Pineapple

            </label>

            <label htmlFor="instructions">
                Special Instructions
                <textarea
                    id="instructions"
                    name="instructions"
                    onChange={inputChange}
                />

            </label>

            <button type='submit'>Submit</button>





        </form>

            </>
    )



}