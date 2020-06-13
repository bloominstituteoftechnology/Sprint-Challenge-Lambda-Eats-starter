import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from "yup";
import "../../src/Form.css";

//setup schema

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),
    size: yup.string().required("Must Select a Size"),
    pepperoni: yup.boolean().defined(),
    sausage: yup.boolean().defined(),
    canadianBacon: yup.boolean().defined(),
    spicyItalianSausage: yup.boolean().defined(),
    grilledChicken: yup.boolean().defined(),
    onions: yup.boolean().defined(),
    greenPeppers: yup.boolean().defined(),
    dicedTomatos: yup.boolean().defined(),
    blackOlives: yup.boolean().defined(),
    roastedGarlic: yup.boolean().defined(),
    artichokeHearts: yup.boolean().defined(),
    threeCheese: yup.boolean().defined(),
    pineapple: yup.boolean().defined(),
    extraCheese: yup.boolean().defined(),
    orderNotes: yup.string().notRequired()
});

export default function () {

    //state
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        pepperoni: false,
        sausage: false,
        canadianBacon: false,
        spicyItalianSausage: false,
        grilledChicken: false,
        onions: false,
        greenPeppers: false,
        dicedTomatos: false,
        blackOlives: false,
        roastedGarlic: false,
        artichokeHearts: false,
        threeCheese: false,
        pineapple: false,
        extraCheese: false,

        orderNotes: ""
    })

    //error state
    const [errors, setErrors] = useState({
      name: "",
      size: "",
      pepperoni: false,
      sausage: false,
      canadianBacon: false,
      spicyItalianSausage: false,
      grilledChicken: false,
      onions: false,
      greenPeppers: false,
      dicedTomatos: false,
      blackOlives: false,
      roastedGarlic: false,
      artichokeHearts: false,
      threeCheese: false,
      pineapple: false,
      extraCheese: false,

      orderNotes: ""

    })
    //usestate button
    const [buttonDisabled, setButtonDisabled] = useState(false);
    //usestate post
    const [post, setPost] = useState([]);

    //inputchanges

    const inputChange = (e) => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        };

        validateChange(e);
        setFormState(newFormData);
    };
    //button
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

    //submit button
    const formSubmit = (e) => {
        e.preventDefault()
        
        
        axios
            .post("https://reqres.in/api/users?page=2", formState)
            .then(res => {
                setPost(res.data);
                console.log("success", post);
                console.log(res.data.size)
                setFormState({
                  name: "",
                  size: "",
                  pepperoni: false,
                  sausage: false,
                  canadianBacon: false,
                  spicyItalianSausage: false,
                  grilledChicken: false,
                  onions: false,
                  greenPeppers: false,
                  dicedTomatos: false,
                  blackOlives: false,
                  roastedGarlic: false,
                  artichokeHearts: false,
                  threeCheese: false,
                  pineapple: false,
                  extraCheese: false,
                  orderNotes: ""
            
                })
                
            })
            .catch(err => console.log(err.response));

              
    };

    //CallBack function for alert
    const sent = (e) => {
      alert('The order is successfully submitted')  
        e.preventDefault();     
         
    }
    

    //returning form  
    return (

        <form onSubmit={formSubmit}>
            <h1>Build Your Own Pizza</h1>
            <label htmlFor='name' id="customerName">
                Customer's Name
                <br />
                <span>Required</span>
                </label>
                <br />
                <input
                    type='text'
                    name='name'
                    id='nameinput'
                    placeholder='Name'
                    data-cy='name'
                    value={formState.name}
                    onChange={inputChange}
                />
                {errors.name.length > 5 ? <p className="error">{errors.name}</p> : null}

            <br />

            <label htmlFor='size' id="sizeID">
                Choice of Size
                <br />
                <span>Required</span>
                </label>
                <br />
                <select name='size' data-cy="sizeSelect" id='sizeinput' onChange={inputChange}>
                    <option value="" disabled selected>Choose a size</option>
                    <option name="SM" value='small'>Small</option>
                    <option name="MD" value='medium'>Medium</option>
                    <option name="LG" value='large'>Large</option>
                    <option name="XL" value='extraL'>Extra Large</option>
                </select>
          
            <br />


            {/* start toppings */}


            <div className='toppingsChecklist'>

              

                <p>Add Toppings</p>

                <th>
                <label htmlFor='pepperoni'>
                    <input
                        type='checkbox'
                        name='pepperoni'
                        id='pepperoniCheckBox'
                        checked={formState.pepperoni}
                        onChange={inputChange}
                    />
                    Pepperoni
                </label>
                <br />

                <label htmlFor='sausage'>
                    <input
                        type='checkbox'
                        name='sausage'
                        id='sausageCheckBox'
                        checked={formState.sausage}
                        onChange={inputChange}
                    />
                    Sausage
                </label>
                <br />

                <label htmlFor='canadianBacon'>
                    <input
                        type='checkbox'
                        name='canadianBacon'
                        id='canadianCheckBox'
                        checked={formState.canadianSausage}
                        onChange={inputChange}
                    />
                    Canadian Bacon
                </label>
                <br />

                <label htmlFor='spicyItalianSausage'>
                    <input
                        type='checkbox'
                        name='spicyItalianSausage'
                        id='spicyItalianSausageCheckBox'
                        data-cy='spicyItalianSausage'
                        checked={formState.spicyItalianSausage}
                        onChange={inputChange}
                    />
                    Spicy Italian Sausage
                </label>
                <br />

                <label htmlFor='grilledChicken'>
                    <input
                        type='checkbox'
                        name='grilledChicken'
                        id='grilledChickenCheckBox'
                        checked={formState.grilledChicken}
                        onChange={inputChange}
                    />
                    Grilled Chicken
                </label>
                <br />

                <label htmlFor="onions">
                  <input 
                  type='checkbox'
                  name='onions'
                  id='onionsCheckBox'
                  checked={formState.onions}
                  onChange={inputChange}
                  />
                  Onions
                </label>
                <br />

                <label htmlFor="greenPeppers">
                  <input 
                  type='checkbox'
                  name='greenPeppers'
                  id='greenPeppersCheckBox'
                  checked={formState.greenPeppers}
                  onChange={inputChange}
                  />
                  Green Peppers
                </label>
                <br />
                </th>

                <th>

                <label htmlFor="dicedTomatos">
                  <input 
                  type='checkbox'
                  name='dicedTomatos'
                  id='tomatosCheckBox'
                  checked={formState.dicedTomatos}
                  onChange={inputChange}
                  />
                  Diced Tomatos
                </label>
                <br />

                <label htmlFor="blackOlives">
                  <input 
                  type='checkbox'
                  name='blackOlives'
                  id='blackOlivesCheckBox'
                  checked={formState.blackOlives}
                  onChange={inputChange}
                  />
                  Black Olives
                </label>
                <br />

                <label htmlFor="roastedGarlic">
                  <input 
                  type='checkbox'
                  name='roastedGarlic'
                  id='roastedGarlicCheckBox'
                  checked={formState.roastedGarlic}
                  onChange={inputChange}
                  />
                  Roasted Garlic
                </label>
                <br />

                <label htmlFor="artichokeHearts">
                  <input 
                  type='checkbox'
                  name='artichokeHearts'
                  id='artichokeHeartsCheckBox'
                  checked={formState.articokeHearts}
                  onChange={inputChange}
                  />
                  Artichoke Hearts
                </label>
                <br />

                <label htmlFor="threeCheese">
                  <input 
                  type='checkbox'
                  name='threeCheese'
                  id='threeCheeseCheckBox'
                  checked={formState.threeCheese}
                  onChange={inputChange}
                  />
                  Three Cheese
                </label>
                <br />

                <label htmlFor="pineapple">
                  <input 
                  type='checkbox'
                  name='pineapple'
                  id='pineappleCheckBox'
                  checked={formState.pineapple}
                  onChange={inputChange}
                  />
                  Pineapple
                </label>
                <br />


                <label htmlFor='extraCheese'>
                    <input
                        type='checkbox'
                        name='extraCheese'
                        id='cheeseCheckBox'
                        checked={formState.cheese}
                        onChange={inputChange}
                    />
                    Extra Cheese
                </label>
                <br />

                </th>

            </div>
            <br />

          
            <label htmlFor='Order Notes'>
                Special Instructions
                <br /><br />
                <textarea
                    name='orderNotes'
                    id='orderNotesInput'
                    placeholder={`Anything else you'd like to add?`}
                    value={formState.orderNotes}
                    data-cy="orderNotes"
                    onChange={inputChange}
                />
            </label>
            <br />
            <button name='submit' id="submit" onSubmit={sent} disabled={buttonDisabled}data-cy="submit">Submit</button>
            <pre>{JSON.stringify(post, null, 2)}</pre>

        </form>

        

    )

}


