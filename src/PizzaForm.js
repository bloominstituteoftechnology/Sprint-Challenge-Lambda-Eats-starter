import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
import axios from 'axios'

const formSchema = yup.object().shape({
    name: yup.string().required('Please put Name'),
    size: yup.string().required('Please choose a size'),
    pepperoni: yup.boolean().defined(),
    olives: yup.boolean().defined(),
    chicken: yup.boolean().defined(),
    pineapple: yup.boolean().defined(),
    peppers: yup.boolean().defined(),
    onions: yup.boolean().defined(),
    cheese: yup.boolean().defined(),
    instructions: yup.string()
})

export default function PizzaForm(){

    const [formState, setFormState] = useState({
        name: '',
        size: '',
        pepperoni: false,
        olives: false,
        chicken: false,
        pineapple: false,
        peppers: false,
        onions: false,
        cheese: false,
        instructions: '',
    })

    const [errors, setErrors] = useState({
        name: '',
        size: '',
        pepperoni: '',
        olives: '',
        chicken: '',
        pineapple: '',
        peppers: '',
        onions: '',
        cheese: '',
        instructions: '',
    })


    const [post, setPost] = useState([]);

    // const[ buttonDisabled, setButtonDisabled] = useState(true)

    

    // useEffect(() => {
    //     formSchema.isValid(formState)
    //     .then(valid => {
    //         setButtonDisabled(!valid)
    //     })
    // }, [formState])

    

    const formSubmit = e => {
        e.preventDefault();
        axios.post("https://reqres.in/api/users", formState)
        .then(res => {
            setPost(res.data);

            setFormState({
                name: '',
                size: res.data.size,
                pepperoni: false,
                olives: false,
                chicken: false,
                pineapple: false,
                peppers: false,
                onions: false,
                cheese: false,
                instructions: '',
            })
        })
        .catch(err => {
            console.log(err.res)
        })
    }

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ''
                });
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                })
            })
    };

    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
            e.target.type === 'checkbox' ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormData)
    }

    return(
        <div className='formcontainer'>
            <h1>Lets Make a Pizza!</h1>
        <form onSubmit={formSubmit}>
            <label htmlFor='name'>
                What's Your Name?<br/>
                <input
                id='name'
                type='text'
                name='name'
                value={formState.name}
                onChange={inputChange}
                />
                {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
            </label><br/>

            <label htmlFor='size'>
                Choose your size<br/>
                <select id='size' name='size' onChange={inputChange}>
                    <option defaultValue='choosesize'>-- Choose Size --</option>
                    <option value='small'>small</option>
                    <option value='medium'>medium</option>
                    <option value='large'>large</option>
                    <option value='family'>family</option>
                </select>
                {errors.size.length > 0 ? <p className="error">{errors.size}</p> : null}
            </label>

            <label htmlFor='toppings'/>
            <h3>Choose Your Toppings</h3>
            <label>
            <input
            type='checkbox'
            name='pepperoni'
            checked={formState.pepperoni}
            onChange={inputChange}
            />Pepperoni</label>

            <label>
            <input
            type='checkbox'
            name='olives'
            checked={formState.olives}
            onChange={inputChange}
            />Olives</label>

            <label>
            <input
            type='checkbox'
            name='chicken'
            checked={formState.chicken}
            onChange={inputChange}
            />Chicken</label>

            <label>
            <input
            type='checkbox'
            name='pineapple'
            checked={formState.pineapple}
            onChange={inputChange}
            />Pineapple</label>

            <label>
            <input
            type='checkbox'
            name='peppers'
            checked={formState.peppers}
            onChange={inputChange}
            />Peppers</label>

            <label>
            <input
            type='checkbox'
            name='onions'
            checked={formState.onions}
            onChange={inputChange}
            />Onions</label>
            <label>
            <input 
            type='checkbox'
            name='cheese'
            checked={formState.cheese}
            onChange={inputChange}
            />Cheese</label>
            <br/>

            <label htmlFor='instructions'>
                Any Special instructions?<br/>
                <textarea
                id='instructions'
                name='instructions'
                value={formState.instructions}
                onChange={inputChange}
                />
                {errors.instructions.length > 0 ? <p className="error">{errors.instructions}</p> : null}
            </label><br/>
            
            <button name='submit' type='submit'>Submit Order</button>
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </form>
   </div>
    )
}