import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';
import * as yup from 'yup';




const Form = () => {
    const[ formPost, setFormPostState ] = useState([])

    const [ formState, setFormState ] = useState({
        name: '',
        size: '',
        jalapenos: '',
        mushrooms: '',
        olives: '',
        onions: '',
        peppers: '',
        spinach: '',
        canadian_bacon: '',
        bacon: '',
        beef: '',
        chicken: '',
        pepperoni: '',
        sausage: ''
    
    })

    // const [buttonDisabled, setButtonDisabled] = useState(true)

    const [ errors, setErrors ] = useState({
        name: '',
        size: '',
        jalapenos: '',
        mushrooms: '',
        olives: '',
        onions: '',
        peppers: '',
        spinach: '',
        canadian_bacon: '',
        bacon: '',
        beef: '',
        chicken: '',
        pepperoni: '',
        sausage: ''
    })

    useEffect(() => {
        console.log('Validating form')
        formSchema.isValid(formState)
      }, [formState])




    const formSchema = yup.object().shape({
        name: yup.string().required().min(2, 'please enter at least 2 characters'),
        size: yup.string().oneOf(['small', 'medium', 'large']),
        jalapenos: yup.boolean(),
        mushrooms: yup.boolean(),
        olives: yup.boolean(),
        onions: yup.boolean(),
        peppers: yup.boolean(),
        spinach: yup.boolean(),
        canadian_bacon: yup.boolean(),
        bacon: yup.boolean(),
        beef: yup.boolean(),
        chicken: yup.boolean(),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        instructions: yup.boolean()   


    })

    const orderPizza = e => { //formSubmit line 49
        e.preventDefault();
    
        axios
          .post('https://reqres.in/api/users', formState)
          .then(res => {
            setFormPostState(res.data)
            console.log('yay pizza!')
    
            setFormState ({
                name: '',
                size: '',
                jalapenos: '',
                mushrooms: '',
                olives: '',
                onions: '',
                peppers: '',
                spinach: '',
                canadian_bacon: '',
                bacon: '',
                beef: '',
                chicken: '',
                pepperoni: '',
                sausage: '',
                instructions:''
            })
          })
          .catch(err => console.log('you goofed'))
      };




      const validateInputs = e => {  //note this must be above your onChange function
        yup.reach(formSchema, e.target.name).validate(e.target.value).then(inputIsValid => {
          // if inputIsValid is true, then erase any error state at that key/value in errors
          setErrors({
            ...errors,
            [e.target.name]: ''
          })
        }).catch(err => {
          setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
          })
        })
      }
   


    const updateInputs = e => { //inputchange (line 89)
        e.persist();
        console.log('updates', e.target.value);
    
        const updatedFormData = {
          ...formState,
          [e.target.name]: e.target.value,
        }
        validateInputs(e)
        
        setFormState(updatedFormData);
      };


    return (
        <>
        <Nav />
        <div className='form-container'>
            <div>
                <h2>Tell us how you like your pie</h2>

                <form onSubmit={orderPizza}>
                <label htmlFor='name'>Name:&nbsp;
                    <input id='name' name='name' type='text' data-cy="name" value={formState.name} onChange={updateInputs} />
                    {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
                </label>

                <label htmlFor='size'>Select Your Size: &nbsp;
                    <select id='size' name='size' type='text' onChange={updateInputs} >
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <h3>Toppings!</h3>
                <div className='toppings-container'>
                    
                    <div>  
                        <h4>Veggies</h4> 
                        <ul>
                            
                            <li>
                                <label htmlFor='jalapenos'> 
                                    <input id='jalapenos' name='jalapenos' type='checkbox' data-cy="veggie1"  onChange={updateInputs} />
                                    Jalapeños:&nbsp;
                                </label>
                            </li>
                            <li>
                                <label htmlFor='mushrooms'>
                                    <input id='mushrooms' name='mushrooms' type='checkbox' data-cy="veggie2"  onChange={updateInputs} />
                                    Mushrooms:&nbsp; 
                                </label>
                            </li>
                            <li>
                                <label htmlFor='olives'> 
                                    <input id='olives' name='olives' type='checkbox' checked={formState.olives} onChange={updateInputs} />
                                    Olives:&nbsp;
                                </label> 
                            </li>
                            <li>
                                <label htmlFor='onions'> 
                                    <input id='onions' name='onions' type='checkbox' checked={formState.onions} onChange={updateInputs} />
                                    Onions:&nbsp;
                                </label>
                            </li>
                            <li>
                                <label htmlFor='peppers'> 
                                    <input id='peppers' name='peppers' type='checkbox' checked={formState.peppers} onChange={updateInputs} />
                                    Peppers:&nbsp;
                                </label> 
                            </li>
                            <li>
                                <label htmlFor='spinach'> 
                                    <input id='spinach' name='spinach' type='checkbox' checked={formState.spinach} onChange={updateInputs} />
                                    Spinach:&nbsp;
                                </label>  
                            </li>
                        </ul>     
                    </div>

                    <div> 
                        <h4>Meats</h4>
                        <ul>
                            
                            <li>
                                <label htmlFor='canadian_bacon'> 
                                    <input id='canadian_bacon' name='canadian_bacon' type='checkbox' data-cy="meat1" onChange={updateInputs} />
                                    Canadian Bacon:&nbsp;
                                </label>
                            </li>
                            <li>
                                <label htmlFor='bacon'> 
                                    <input id='bacon' name='bacon' type='checkbox' data-cy="meat2" onChange={updateInputs} />
                                    Bacon:&nbsp;
                                </label>     
                            </li>
                            <li>
                                <label htmlFor='beef'> 
                                    <input id='beef' name='beef' type='checkbox' checked={formState.beef} onChange={updateInputs} />
                                    Beef:&nbsp;
                                </label>     
                            </li>
                            <li>
                                <label htmlFor='chicken'>
                                    <input id='chicken' name='chicken' type='checkbox' checked={formState.chicken} onChange={updateInputs} />
                                    Chicken:&nbsp; 
                                </label>    
                            </li>
                            <li>
                                <label htmlFor='pepperoni'> 
                                    <input id='pepperoni' name='pepperoni' type='checkbox'checked={formState.pepperoni} onChange={updateInputs}  />
                                    Pepperoni:&nbsp;
                                </label>    
                            </li>
                            <li>
                                <label htmlFor='sausage'> 
                                    <input id='sausage' name='sausage' type='checkbox' checked={formState.sausage} onChange={updateInputs} />
                                    Sausage:&nbsp;
                                </label>     
                            </li>
                        </ul>    
                    </div>
                </div>

                <div className='form-footer'>
                    <div>
                        <label htmlFor='instructions'>
                            Special Instructions:&nbsp;<br/>
                            <textarea id='instructions' name='instructions' type='text' onChange={updateInputs} />
                        </label>
                    </div>
                    <div>
                        <button type='submit' data-cy="order" >Order</button> 
                        <pre>{JSON.stringify(formPost, null, 2)}</pre> 
                    </div>
                    

                    
                </div>  
            </form>
    </div>
</div>
            
        </>
    );
};

export default Form;


