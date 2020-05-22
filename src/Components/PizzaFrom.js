import React, {useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup.string().min(2).required('Password must contain at least 2 characters'),
    pizzaSize: yup.string().required(),
    toppings: yup.boolean().oneOf([true]),
    specialInstructions:yup.string()
});

function Form() {
    const [pizza, setPizza] = useState([
        {
            name: "",
            pizzaSize:"",
            toppings:"",
            Instructions:''
        }
    ])


    const [errors, setErrors] = useState([
        {
            name: "",
            pizzaSize:"",
            toppings:"",
            Instructions:''
        }
    ]);

    const formSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000', pizza)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    };

    const validate = (e) => {
        yup.reach(formSchema, e.target.toppings)
        .validate(e.target.value)
        .catch(err => {
        console.log(err)
        })
    };

    const inputChange = (e) => {
        e.persist();
        validate(e);
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setPizza({...pizza, [e.target.name]:value});
    };

return(
    <form onSubmit={formSubmit}>
        <label>Name:
            <input type='text' name='name' id='name' value={pizza.name}/>
        </label><br/>
        
        <label>Pizza Size:
            <select>
                <option value={pizza.pizzaSize} name='small' id='small'>Small</option>
                <option value={pizza.pizzaSize} name='medium' id='medium'>Medium</option>
                <option value={pizza.pizzaSize} name='large' id='large'>Large</option>
            </select>
        </label><br/>

        <p>Toppings:</p>
            <input value='cheese'
            type="checkbox" 
            id="cheese" 
            name="cheese" 
            checked={pizza.toppings} 
            onChange={inputChange}
            />
            <label for='cheese'>Cheese</label>
            
            <input 
            value='pepperoni' 
            type="checkbox" 
            id="pepperoni" 
            name="pepperoni" 
            checked={pizza.toppings} 
            onChange={inputChange}
            />
            <label for='pepperoni'>Pepperoni</label>
            
            <input 
            value='sausage' 
            type="checkbox" 
            id="sausage" 
            name="sausage" 
            checked={pizza.toppings} 
            onChange={inputChange}
            />
            <label for='sausage'>Sausage</label>
            
            <input
            value='pickles'
            type="checkbox" 
            id="pickles" 
            name="pickles" 
            checked={pizza.toppings} 
            onChange={inputChange}
            />
            <label for='pickles'>Pickles</label>
            <br/>

        <label>Special Instructions
            <textarea name='instructions' id='instructions' value={pizza.Instructions} />
        </label>
        <br/>
        <button>Submit</button>
    </form>
);
};
export default Form;