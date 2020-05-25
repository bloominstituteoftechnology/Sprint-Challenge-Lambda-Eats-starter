import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";

import * as yup from "yup";


const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name must be included in your form")
        .min(2, "Name must be at least two characters."),
    
    sausage: yup.boolean().oneOf([true, false]),
    cheese: yup.boolean().oneOf([true, false]),
    pinneapple: yup.boolean().oneOf([true, false]),
    olives: yup.boolean().oneOf([true, false]),
    dropdown: yup.string().oneOf(["optionOne", "optionTwo"]).required("Please choose a size"),
    special: yup.string() 
});

console.log("hello, outside of PizzaForm");
 //form styling
 const FormWrapper = styled.div`
 display: flex;
 flex-direction: column;
 width: 80%;
 margin: 0 auto;
 padding: 5%;
`;

const FormColumn = styled.form`
 display: flex;
 flex-direction: column;
`;

const PizzaForm = () => {     

    //form state
    const [formState, setFormState] = useState({
        name: "",
        sausage: false,
        cheese: false,
        pinneapple: false,
        olives: false,
        dropdown: "optionOne",
        special: ""
    });
    console.log("Formstate dropdown", formState.dropdown)

    //errors
    const [errors, setErrors] = useState({
        name: "",
        sausage: "",
        cheese: "",
        pinneapple: "",
        olives: "",
        dropdown: "",
        special: "" 
    });

    const [post, setPost] = useState({});

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
          console.log(valid);
          console.log(buttonDisabled);
        });
      }, [formState]);


    // const inputChanges = e => {
    //     e.persist();
    //     console.log("change input", e.target.value);

    //     const  newFormData = {
    //         ...formState, [e.target.name] :
    //         e.target.type === "checkbox" ? e.target.checked : e.target.value 
    //     };

    //     validate(e);
    //     setFormState(newFormData);
    // };

        
    const inputChanges = e => {
        e.persist();
        
        console.log("input changed!", e.target.value);

        validate(e);
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({ ...formState, [e.target.name]: value });

       
    
    }


    const validate = e => {
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        yup 
            .reach(formSchema, e.target.name)
            .validate(value)
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
                })
            });

            setFormState({
            ...formState,
            [e.target.name]: e.target.value
            });
    }



    // onSubmit function
    const formSubmit = e => {
        e.preventDefault();
        console.log("Submitted");
        
        axios
            .post('https://reqres.in/api/users/', formState)
            .then(res => {
                console.log('axios post request', res);
                console.log('axios post request', res.data);
                setPost(res.data);
                // setPost([...post, res.data]);
                setFormState({
                    name: "",
                    sausage: "",
                    cheese: "",
                    pinneapple: "",
                    olives: "",
                    dropdown: "",
                    special: ""
                });
            })
            .catch( err => console.log(err.res)); //should it be err.response?

            //do I need to put setFormState in here? or is that what I'm doing with post?
    }


    //to return database record you need to 1. create a new state, 2. post to reqres database w/axios, and 3. log data to the consol

	return (
		<div className="PizzaForm">
            <header>
                    <h1>Lambda Eats</h1>
            </header>

            <FormWrapper>
                <FormColumn onSubmit={formSubmit}>
                    <label htmlFor="nameInput">
                        Name 
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={formState.name}
                            onChange={inputChanges}
                        />
                    </label>
                        {errors.name.length > 0 ? (
                            <p className="error">{errors.name}</p>
                            ) : null}
                        
                    <label htmlFor="sausage">
                        Do you want sausage? Check the box if yes. 
                        <input 
                            type="checkbox"
                            id="sausage"
                            name="sausage"
                            checked={formState.sausage}
                            onChange={inputChanges}
                        />
                    </label>
                    <label htmlFor="cheese">
                        Do you want extra cheese? Check the box if yes. 
                        <input 
                            type="checkbox"
                            id="cheese"
                            name="cheese"
                            checked={formState.cheese}
                            onChange={inputChanges}
                        />
                    </label>
                    <label htmlFor="pinneapple">
                        Do you want pinneapple? Check the box if yes. 
                        <input 
                            type="checkbox"
                            id="pinneapple"
                            name="pinneapple"
                            checked={formState.pinneapple}
                            onChange={inputChanges}
                        />
                    </label>
                    <label htmlFor="olives">
                        Do you want olives? Check the box if yes. 
                        <input 
                            type="checkbox"
                            id="olives"
                            name="olives"
                            checked={formState.olives}
                            onChange={inputChanges}
                        />
                    </label>
                    <label htmlFor="dropdown">
                            What Size? <br />
                            <select 
                                value={formState.dropdown} 
                                name="dropdown" 
                                id="dropdown" 
                                onChange={inputChanges}
                                >
                                    <option value="optionOne">Large</option>
                                    <option value="optionTwo">Extra Large</option>
                            </select>
                        </label>
                    <label htmlFor="special">
                        Do you have any special instructions?
                        <textarea 
                            name="special"
                            id="special"
                            placeholder="Hit enter for multiple lines..."
                            value={formState.special}
                            onChange={inputChanges}
                        />
                    </label>

                    <button type="submit" data-cy="submit" disabled={buttonDisabled}>Add to Order</button>
            
                    <pre>{JSON.stringify(post, null, 2)}</pre>

                </FormColumn>
                <Link to="/" >
                            <button> ~ Home Page ~ </button>
                </Link>
            </FormWrapper>
            </div>
        );
}


export default PizzaForm;