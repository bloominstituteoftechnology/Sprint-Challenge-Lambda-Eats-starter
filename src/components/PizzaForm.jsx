import React from 'react'
import {Link} from 'react-router-dom'

export default function PizzaForm(props){

   const{
      values,
      onInputChange,
      onCheckboxChange,
      onOrder,
      errors
   }=props


  return(
          <>
        <h2> Build Your Own Pizza</h2>

     <form onSubmit={onOrder}>
      
        <p>Please enter your name</p>
       <input type='text' value={values.name} onChange={onInputChange} name="name"/>
       <p>{errors.name}</p>
       <p>Please choose the size of your pizza</p>
       <select onChange={onInputChange}
                value={values.size}
                name="size"
        >
          <option value=''>--Choose Size--</option>
           <option value='small'>Small</option>
           <option value='medium'>Medium</option>
           <option value='large'>Large</option>
        </select>

       <p>Please select your toppings</p>
       <label>Pepperoni
       <input type='checkbox' name="pepperoni" 
               checked={values.toppings.papperoni}
                onChange={onCheckboxChange}/>
        </label>

        <label>Canadian Bacon
       <input type='checkbox' name="canadianBacon" 
               checked={values.toppings.canadianBacon}
                onChange={onCheckboxChange}/>
        </label>
        <label>Spicy Chicken
       <input type='checkbox'name="spicyChicken" 
               checked={values.toppings.spicyChicken}
                onChange={onCheckboxChange}/>
        </label>
 
        <label>Sausage
       <input type='checkbox' name="sausage" 
               checked={values.toppings.sausage}
                onChange={onCheckboxChange}/>
        </label>
       <p>Special Instructions</p>
       <input type='text' name="specialInstructions" 
       onChange={onInputChange} value={values.specialInstructions}/>

      <Link to='/order'><button>Order Now</button></Link>
 
      </form>

   </>
  )





}