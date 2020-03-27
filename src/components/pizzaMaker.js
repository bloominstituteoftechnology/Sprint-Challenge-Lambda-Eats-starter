import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from 'axios';

const PizzaMaker = () => {
const [formValues, setFormvalues]= useState({
    name: "",
    size: "",
    sauce: "",
    pepperoni: "",
    sausage: "",
    canadian: "",
    spicy: "",
    chicken:"",
    instructions: "",

})

return(
    <form>
        <label htmlFor= "Name for Order">
            Name for Order
            <input
            name= "name"
            type= "text"
            value= {formValues.name}
            />

        </label><br/>

        <label htmlFor ="size choice">
        Choose Your Size
        <select name= "size">
            <option value= "select">Select</option>
            <option value= "8in">8in</option>
            <option value= "12in">12in</option>
            <option value= "18in">18in</option>
        </select> 

        </label><br/>
        <label htmlFor= "sauce choice">
        Choose Your Sauce
        <select name= "sauce">
            <option value= "select">Select</option>
            <option value= "marinara">Marinara</option>
            <option value= "BBQ">BBQ</option>
            <option value= "Alfredo">Alfredo</option>
        </select>
        </label>
        <label>
         Choose Your Toppings   
        </label><br/>
        <label htmlFor= "Pepperoni">
            <input
            name= "pepperoni"
            type= "checkbox"
            checked= {formValues.pepperoni}
            />
            Pepperoni

        </label>
        <label htmlFor= "Sausage">
            <input
            name= "sausage"
            type= "checkbox"
            checked= {formValues.sausage}
            />
            Sausage 

        </label><br/>

        <label htmlFor= "Canadian Bacon">
            <input
            name= "canadian"
            type= "checkbox"
            checked= {formValues.canadian}
            />
            Canadian Bacon

        </label>

        <label htmlFor= "Spicy Italian Sausage">
            <input
            name= "spicy"
            type= "checkbox"
            checked= {formValues.spicy}
            />
            Spicy Italian Sausage

        </label><br/>

        <label htmlFor= "Grilled Chiken">
            <input
            name= "chicken"
            type= "checkbox"
            checked= {formValues.chicken}
            />
            Grilled Chiken

        </label><br/>

        <label htmlFor= "special instructions">
            Special Instructions
            <input
            name= "instructions"
            type= "text"
            value= {formValues.instructions}
            />

        </label><br/> 

            <button>Add to Order</button>

    </form>

)

}

export default PizzaMaker