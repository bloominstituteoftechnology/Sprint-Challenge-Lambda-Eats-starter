import React, {useState, useEffect} from "react";
import axios from "axios";
import * as yup from "yup";
import {Link} from "react-router-dom"

const formSchema = yup.object().shape({
    name: yup.string().required("please input a name").min(2, "name must be more than 2 characters"),
    size: yup.string().required("Please a size for your pizza"),
    // top1: yup.boolean(),
    // top2: yup.boolean(),
    // top3: yup.boolean(),
    // top4: yup.boolean(),
    instructions: yup.string().required("Let us know if there are any special instructions")
});

export default function Form() {
    // state for your button and whether you can submit depending on if you fill out required fields
    const [button, setButton] = useState(true);
    // state for our form
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        top1: "",
        top2: "",
        top3: "",
        top4: "",
        instructions: "",

    });

    // state for errors
    const [errors, setErrors] = useState({
        name: "",
        size: "",
        top1: "",
        top2: "",
        top3: "",
        top4: "",
        instructions: "",
    });

    // state for our post request 
    const [post, setPost] = useState([]);
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButton(!valid);
        });
    }, [formState]);
    const formSubmit = e => {
        e.preventDefault();
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                setPost(res.data); 
                setFormState({
                    name: "",
                    size: "",
                    top1: "",
                    top2: "",
                    top3: "",
                    top4: "",
                    instructions: "",
                });
            })
            .catch(err => console.log("something went wrong when submitting your form", err.response));
    };

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
const inputChange = e => {
    e.persist(); // constantly checking to see what the user is typing in and checking if its valid
    const newFormData = {
        ...formState,
        [e.target.name]:
        e.target.type  === "checkbox" ? e.target.checked : e.target.value
    };
    validateChange(e);
    setFormState(newFormData);
};

const checkBoxChange = e => {
    e.persist();
    const newFormData = {
        ...formState,
        [e.target.name]:
        e.target.type  === "checkbox" ? e.target.checked : e.target.value
    };
    setFormState(newFormData);
};

return (
    <form onSubmit={formSubmit}>
        <Link to={"/"}>
            <div>Home</div>
        </Link>
        <h1>Let's Build Your Pizza!</h1>
        <label htmlFor="name">
            Name: 
            <input
                id="name" // connects to the htmlFor
                type="text"
                name="name"
                value={formState.name}
                onChange={inputChange}
            />
            {/* this error 👇 connects with the schema for the first error that we have written */}
             {errors.name.length > 0 ? <p className="error" data-cy="nameError">{errors.name}</p> : null} 
        </label> <br/>
        
        <label htmlFor="size">
            What size pizza would you like?
             <select 
                id="size" 
                name="size" 
                onChange={inputChange}>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
            </select>
        </label> <br/>
        <label>
            <input type="checkbox" name="top1" value="top1" onChange={checkBoxChange} />Sausage
             {errors.top1.length > 0 ? <p className="error">{errors.top1}</p> : null} 
        </label> <br />
        <label>
            <input type="checkbox" name="top2" onChange={checkBoxChange}  />Cheese
             {errors.top2.length > 0 ? <p className="error">{errors.top2}</p> : null} 
        </label> <br />
        <label>
            <input type="checkbox" name="top3" onChange={checkBoxChange}  />Bacon
             {errors.top3.length > 0 ? <p className="error">{errors.top3}</p> : null} 
        </label> <br />
        <label>
            <input type="checkbox" name="top4" onChange={checkBoxChange} />Pepperroni
             {errors.top4.length > 0 ? <p className="error">{errors.top4}</p> : null} 
        </label> <br />
        <label htmlFor="instructions">
                Do you have any special instructions? 
                <textarea
                    id="instructions"
                    name="instructions"
                    value={formState.instructions}
                    onChange={inputChange}
                />
                 {errors.instructions.length > 0 ? <p className="error">{errors.instructions}</p> : null} 
            </label> <br/>
          {/* displaying our post request data */}
          <pre>{JSON.stringify(post, null, 2)}</pre>
          <button type="submit">Submit</button>
    </form>
)

}

