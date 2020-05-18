import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
    id: Date.now(),
    name: yup.string().required("Name is a required field"),
    size: yup.string(),
    Instructions: yup.string(),
    cheese: yup.string(),
    beef: yup.boolean(),
    chicken: yup.boolean(),
    gyros: yup.boolean(),


})

export default function Form(){
    const [formState, setFormState]= useState({
        id: Date.now(),
       name: "",
       Instructions:  "",
       size: "",
       cheese: false,
       beef: false,
       chicken: false,
       gyros:false,

   })
   const [post, setPost] = useState([]);
   const [errorState, setErrorState] = useState({
    name: "",
    Instructions:"",
    size:"",
    cheese:"",
    beef:"",
    chicken:"",
    gyros:""
  });

   
      const changeHandler  = event => {
        event.persist();
        
        const FormData = {
            ...formState,
            [event.target.name]:
              event.target.type === "checkbox" ? event.target.checked : event.target.value
          };
          validater(event);
        setFormState(FormData)
      };
      const validater = (event) => {
    
        yup
        .reach(formSchema, event.target.name)
        .validate(event.target.value)  
        .then( valid => {
            setErrorState({
                ...errorState,
                [event.target.name]: ""
              });
        })    
        .catch( err => { 
            console.log(err.error)
            setErrorState({
                ...errorState,
                [event.target.name]: err.errors[0]
              });
           
        })
      }
      
      const formSubmit = event => {
        event.preventDefault();
         console.log("form submitted!")
         axios
           .post("https://reqres.in/api/users", formState)
           .then(response =>  { setPost(response.data);
           setFormState({
            name: "",
            Instructions:"",
            size:"",
            cheese:"",
            beef:"",
            chicken:"",
            gyros:""
               
           })
        })
           .catch(err => console.log(err));
           
 
          
       };
    

    return(
        <form onSubmit= {formSubmit}>
            <label htmlFor = "name"> Name:</label>
            <input 
                type = "text"
                name = "name"
                placeholder = " Enter Name"
                value = {formState.name}
                onChange = {changeHandler}
            />
        {errorState.name.length > 2 ? (
        <p className="error">{errorState.name}</p>
        ) : null}
            <select name ="size"  onChange = {changeHandler}>
                <option  name = "Small" value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="X-Large">X-Large</option>
            </select>
            <label htmlFor = "cheese">Cheese</label>
            <input
                name = "cheese"
                type = "checkbox"
                value = {formState.cheese}
                onChange= {changeHandler}
            />
             <label htmlFor = "beef">Beef</label>
            <input
                name = "beef"
                type = "checkbox"
                value = {formState.beef}
                onChange= {changeHandler}
            />
             <label htmlFor = "chicken">Chicken</label>
            <input
                name = "chicken"
                type = "checkbox"
                value = {formState.chicken}
                onChange= {changeHandler}
            />
             <label htmlFor = "gyros">Gyros</label>
            <input
                name = "gyros"
                type = "checkbox"
                value = {formState.gyros}
                onChange= {changeHandler}
            />
            <label htmlFor = "Instructions">Special Instrutions: </label>
            <textarea 
                name = "Instructions"
                type = "text"
                value = {formState.Instructions}
                onChange = {changeHandler}
                />
            <button>Add to Order</button>
            <pre>{JSON.stringify(post, null, 2)}</pre>
            
        </form>
    );
   };

