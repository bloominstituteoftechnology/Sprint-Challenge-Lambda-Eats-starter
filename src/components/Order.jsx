import React from 'react'
import * as yup from 'yup';

export default function Order(props){

     return(

        <div>
       <h2> Congrats! Pizza is on its way!</h2>
       <h3>your order information</h3>
       <p> name:{props.values.name}</p>
       <p> size:{props.values.size}</p>
     <p> toppings:{Object.keys(props.values.toppings).filter((topping)=>{
           return props.values.toppings[topping]
     }).toString()}</p>
       <p> Special Instructions:{props.values.specialInstructions}</p>
       <img src="https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif" alt="dog eat pizza"/>
       </div>
     )


}