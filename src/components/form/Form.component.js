import React, {useState, useEffect} from "react"
import axios from "axios"
import * as yup from "yup"



const formSchema = yup.object().shape({
    name: yup.string().required("We need your name").min(2, "Has to be longer than 2 letters"),
    size: yup.string(),
    topping: yup.boolean(true || false),
    topping1: yup.boolean(true || false),
    topping2: yup.boolean(true || false),
    topping3: yup.boolean(true || false),
    topping4: yup.boolean(true || false),
    topping5: yup.boolean(true || false),
    topping6: yup.boolean(true || false),
    specialInstruction: yup.string("")
})

const Form = () => {
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [formState, setFormState] =useState({
        name: "",
        size: "Small",
        // topping: "",
        // topping1: "",
        // topping2: "",
        // topping3: "",
        // topping4: "",
        // topping5: "",
        // topping6: "",
        specialInstruction:""
      
    });

    const [errors, setErrors] =useState({
        name: "",
        size: "",
        // topping: "",
        // topping1: "",
        // topping2: "",
        // topping3: "",
        // topping4: "",
        // topping5: "",
        // topping6: "",
        specialInstruction:""
        
    });

    const [post, setPost] = useState([]);

    useEffect(() => {
        formSchema.isValid(formState)
        .then(valid => {
            setButtonDisabled(!valid);
        });

    },[formState])

    const formSubmit = event => {
        event.preventDefault();
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                setPost([post, res.data]);

            setFormState({
                name: "",
                size: "Small",
                // topping: "",
                // topping1: "",
                // topping2: "",
                // topping3: "",
                // topping4: "",
                // topping5: "",
                // topping6: "",
                specialInstruction:""
                
            });
        })
        .catch(err => console.log(err.response))
    }

    const validateChange = event => {
        yup
        .reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then(valid => {
            setErrors({
                ...errors,
                [event.target.name]: ""
            });
        })
        .catch(err => {
            setErrors({
                ...errors,
                [event.target.name]:err.errors[0]
            });
        });
    }
    const inputChange = event => {
        event.persist();
        const newFormData ={
            ...formState,
            [event.target.name]:
                event.target.type ==="checkbox"? event.target.checked : event.target.value
        };

        validateChange(event);
        setFormState(newFormData);
    }

    return (
        <>
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
            Your Name
            <input
                type="text"
                name="name"
                value={formState.name}
                onChange={inputChange}
            />
            </label>
            <label htmlFor="size">
            Size? (Small sized if not selected)
            <select 
                id="size" 
                name="size" 
                onChange={inputChange}
            >
                <option value="Small">Select Size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="X-Large">X-Large</option>
                <option value="Super Hero Size">Super Hero Size</option>
            </select>
            </label>
            <h3>Toppings:</h3>
            <label htmlFor="topping">topping
                <input 
                    type="checkbox"
                    name="topping"
                    checked={formState.topping}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="topping">topping
                <input 
                    type="checkbox"
                    name="topping2"
                    checked={formState.topping2}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="topping">topping
                <input 
                    type="checkbox"
                    name="topping3"
                    checked={formState.topping3}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="topping">topping
                <input 
                    type="checkbox"
                    name="topping4"
                    checked={formState.topping4}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="topping">topping
                <input 
                    type="checkbox"
                    name="topping5"
                    checked={formState.topping5}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="topping">topping
                <input 
                    type="checkbox"
                    name="topping6"
                    checked={formState.topping6}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="specialInstruction">
                <h4>Comment (optional)</h4>
                <textarea 
                    name="specialInstruction"
                    value={formState.address}
                    onChange={inputChange}
                />
            </label>
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button disabled={buttonDisabled}>Placed Order</button>
        </form>
        </>
    )
}



export default Form