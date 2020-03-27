import axios from "axios";
import React, {useState, useEffect} from "react";
import * as yup from "yup";
import "./Home.js";


const formSchema = yup.object().shape({
    name: yup.string().required("you have failed").min(2, "name must be more than 2 characters"),
    email: yup.string().email().required("you have failed again").min(6, "name must be more than 2 characters"),
    size: yup.string().required("I know your size?"),  
    sausage: yup.string(),
    chicken: yup.string(),
    bacon: yup.string(),
    pepperoni: yup.string(),
    instructions: yup.string().required("what you need?"),
  });

  export default function Pizza() {
      
    const [formState, setFormState] = useState({
      name: "",
      email: "",
      size: "",
      sausage: "",
      chicken: "",
      bacon: "",
      pepperoni: "",
      instructions: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        size: "",
        sausage: "",
        chicken: "",
        bacon: "",
        pepperoni: "",
        instructions: "",
    })

    const [submitDisable, setSubmitDisabled] = useState(true);

    const [post, setPost] = useState([]);
    useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setSubmitDisabled(!valid);
        });
     }, [formState]);
   

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
              [e.target.name]: err.errors
            });
          });
      };
      const formSubmit = e => {
        e.preventDefault();
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
            setPost(res.data);
            console.log("success", post);

            setFormState({
              name: "",
              email: "",
              size: "",
              sausage: "",
              chicken: "",
              bacon: "",
              pepperoni: "",
              instructions: "",
            });
          })
          .catch(err => {
            console.log(err.res);
          });
      };

    const inputChange = (event) => {
        event.persist();
        const newFormData = {
            ...formState,
            [event.target.name]:
              event.target.type === "checkbox" ? event.target.checked : event.target.value
          };
            validateChange(event);
            setFormState(newFormData);
    }
    return(
        <div>
            <h2>Pizza Is Yours For The Taking</h2>
            <form onSubmit={formSubmit}>
                <label htmlFor="name">
                    Name
                    <input 
                    id="name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputChange}
                    />
                    {errors.name.length > 0 ? (<p className="error">{errors.name}</p> ): null}
                </label>

                <br/>
                <label htmlFor="email">
                    Email
                    <input 
                    id="email"
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={inputChange}
                    />
                    {errors.email.length > 0 ? (<p className="error"> {errors.email}</p>) : null}
                </label>

                <br/>
                <label htmlFor="size">
                    What size Pizza?
                 <select 
                    id="size" 
                    name="size" 
                    onChange={inputChange}>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                    </select>
                </label>
        
                <br/>  
                <label htmlFor="checkbox">
                    Sausage
                    <input 
                    id="checkbox"
                    type="checkbox"
                    checked={formState.checkbox}
                    name="sausage"
                    onChange={inputChange}
                    />
                    <label htmlFor="checkbox">
                    Chicken
                    <input 
                    id="checkbox"
                    type="checkbox"
                    checked={formState.checkbox}
                    name="chicken"
                    onChange={inputChange}
                    />
                    </label>
                    </label>
                    <label htmlFor="checkbox">
                    Bacon
                    <input 
                    id="checkbox"
                    type="checkbox"
                    checked={formState.checkbox}
                    name="bacon"
                    onChange={inputChange}
                    />
                    </label>

                    <label htmlFor="checkbox">
                    Pepperoni
                    <input 
                    id="checkbox"
                    type="checkbox"
                    checked={formState.checkbox}
                    name="pepperoni"
                    onChange={inputChange}
                    />
                    </label>
                    <br/>
                    <label htmlFor="instructions">
                    Special Instructions
                    <input 
                    id="instructions"
                    type="text"
                    name="instructions"
                    value={formState.instructions}
                    onChange={inputChange}
                    />
                    {errors.instructions.length > 0 ? (<p className="error">{errors.instructions}</p> ): null}
                </label>
                <pre>{JSON.stringify(post, null, 2)}</pre>  
                <button disabled={submitDisable}>new world ORDER!!!</button>
            </form>
        </div>   
      )  
  };