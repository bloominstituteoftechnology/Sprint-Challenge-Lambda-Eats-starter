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
    axios.post('', pizza)
    .then(response => console.log(response))
    .catch(err => console.log(err))
};

const validate = (e) => {
    yup.reach(formSchema, e.target.name)
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

        <label>toppings
            <input value='Cheese' type="checkbox" id="cheese" name="cheese" checked={pizza.toppings} onChange={inputChange}/>
            <input value='Pepperoni' type="checkbox" id="pepperoni" name="pepperoni" checked={pizza.toppings} onChange={inputChange}/>
            <input value='Sausage' type="checkbox" id="sausage" name="sausage" checked={pizza.toppings} onChange={inputChange}/>
            <input type="checkbox" id="pickles" name="pickles" checked={pizza.toppings} onChange={inputChange}/>
        </label><br/>

        <label>Special Instructions
            <textarea name='instructions' id='instructions' value={pizza.Instructions} />
        </label>
        <button>Submit</button>
    </form>
)
}
export default Form;