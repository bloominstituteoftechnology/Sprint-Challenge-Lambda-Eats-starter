import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from "yup";

//form schema
const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),
    size: yup.string().required("Must Select a Size"),
    pepperoni: yup.boolean().defined(),
    mushrooms: yup.boolean().defined(),
    peppers: yup.boolean().defined(),
    sausage: yup.boolean().defined(),
    specInstr: yup.string().notRequired()
  });

export default function Form(){
//______________STATES_________________
    //state for form
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        pepperoni: false,
        mushrooms: false,
        peppers: false,
        sausage: false,
        specInstr: ""
    })
    //state for errors
    const [errors, setErrors] = useState({
        name: "",
        size: "",
        pepperoni: "",
        mushrooms: "",
        peppers: "",
        sausage: "",
        specInstr: ""
    })
    //state for button
    const [buttonDisabled, setButtonDisabled] = useState(true);
    //state for post
    const [post, setPost] = useState([]);
//_____________EVENT HANDLERS___________
    //input change
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
    //button disabled
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
    //on submit
    const formSubmit = e => {
        e.preventDefault();
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
            setPost(res.data);
            console.log("success", post);
            console.log(res.data.size)
            setFormState({
                name: "",
                size: res.data.size,
                pepperoni: false,
                mushrooms: false,
                peppers: false,
                sausage: false,
                specInstr: ""
            });
          })
          .catch(err => console.log(err.response));
      };
//_____________Return the Form____________________  
    return(
        

        <form onSubmit = {formSubmit}>
            <h1>Place an Order!</h1>
            <label htmlFor = 'name'>
                What is your name?
                <br/>
                <input
                type = 'text'
                name = 'name'
                id = 'nameinput'
                placeholder = 'Name'
                value={formState.name}
                onChange={inputChange}
                />
            </label>
            <br/>

            <label htmlFor = 'size'>
                What size pizza would you like?
                <br/>
                <select name = 'size' id = 'sizeinput' onChange = {inputChange}>
                    <option name="default" value={null}></option>
                    <option name="Sm" value='Sm'>Sm</option>
                    <option name="Lg" value='Lg'>Lg</option>
                    <option name="XL" value='XL'>XL</option>
                </select>
            </label>
            <br/>
            
            <div className = 'toppingsChecklist'>

                <p>Select Toppings</p>

                <label htmlFor = 'pepperoni'>
                    <input
                        type='checkbox'
                        name='pepperoni'
                        id = 'pepperoniCheckBox'
                        checked={formState.pepperoni} 
                        onChange={inputChange}
                    /> 
                    Pepperoni
                </label>
                <br/>

                <label htmlFor = 'mushrooms'>
                    <input
                        type='checkbox'
                        name='mushrooms'
                        id = 'mushroomsCheckBox'
                        checked={formState.mushrooms} 
                        onChange={inputChange}
                    />
                    Mushrooms
                </label>
                <br/>

                <label htmlFor = 'peppers'>
                    <input
                        type='checkbox'
                        name='peppers'
                        id = 'peppersCheckBox'
                        checked={formState.peppers} 
                        onChange={inputChange}
                    /> 
                    Peppers
                </label>
                <br/>

                <label htmlFor = 'sausage'>
                    <input
                        type='checkbox'
                        name='sausage'
                        id = 'sausageCheckBox'
                        checked={formState.sausage} 
                        onChange={inputChange}
                    />
                    Sausage
                </label>
                <br/>

            </div>

            <label htmlFor = 'Special Instructions'>
                Any special instructions?
                <br/>
                <textarea
                name = 'specInstr'
                id = 'specInstrInput'
                placeholder = 'Type instructions here...'
                value={formState.specInstr} 
                onChange={inputChange}
                />
            </label>
            <br/>
            <button name = 'submit' disabled={buttonDisabled}>Submit</button>
            <pre>{JSON.stringify(post, null, 2)}</pre>
            
        </form>

    )

}