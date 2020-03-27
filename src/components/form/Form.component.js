import React, {useState, useEffect} from "react"
import axios from "axios"
import * as yup from "yup"



const formSchema = yup.object().shape({
    name: yup.string().required("We need your name").min(2, "Has to be longer than 2 letters"),
    size: yup.string(),
    ExtraCheese: yup.boolean(true || false),
    BlackOlive: yup.boolean(true || false),
    Onion: yup.boolean(true || false),
    Tomato: yup.boolean(true || false),
    Garlic: yup.boolean(true || false),
    GreenPepper: yup.boolean(true || false),
    specialInstruction: yup.string("")
})

const Form = () => {
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [formState, setFormState] =useState({
        name: "",
        size: "Small",
        // topping: "",
        // topping1: "",
        // "BlackOlive": "",
        // Onion: "",
        // Tomato: "",
        // Garlic: "",
        // GreenPepper: "",
        specialInstruction:""
      
    });

    const [errors, setErrors] =useState({
        name: "",
        size: "",
        // topping: "",
        // topping1: "",
        // "BlackOlive": "",
        // Onion: "",
        // Tomato: "",
        // Garlic: "",
        // GreenPepper: "",
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
                console.log(res)
                setPost([post, res.data]);

            setFormState({
                name: "",
                size: "Small",
                // topping: "",
                // topping1: "",
                // "BlackOlive": "",
                // Onion: "",
                // Tomato: "",
                // Garlic: "",
                // GreenPepper: "",
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
            <h3>Your Name:</h3>
            <input
                type="text"
                name="name"
                value={formState.name}
                onChange={inputChange}
            />
            </label>
            <label htmlFor="size">
            <h3>Size?</h3>
             <p>(Small sized if not selected)</p>
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
            <label htmlFor="ExtraCheese">Extra Cheese
                <input 
                    type="checkbox"
                    name="ExtraCheese"
                    checked={formState.topping}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="BlackOlive">Black Olive
                <input 
                    type="checkbox"
                    name="BlackOlive"
                    checked={formState.BlackOlive}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="Onion">Onion
                <input 
                    type="checkbox"
                    name="Onion"
                    checked={formState.Onion}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="Tomato">Tomato
                <input 
                    type="checkbox"
                    name="Tomato"
                    checked={formState.Tomato}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="Garlic">Garlic
                <input 
                    type="checkbox"
                    name="Garlic"
                    checked={formState.Garlic}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="GreenPepper">Green Pepper
                <input 
                    type="checkbox"
                    name="GreenPepper"
                    checked={formState.GreenPepper}
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