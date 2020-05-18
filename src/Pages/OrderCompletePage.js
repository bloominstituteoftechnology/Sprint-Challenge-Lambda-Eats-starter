import React from 'react';

import Header from '../Components/Header2';

export default function OrderComplete(props){
    console.log(props);
    return(
        <>

            <Header head="Your Order is on the way"


            />

            {props.order.map(item=>{
             return(
                 <>
                     <div className="orderText">{item.name}</div>
                     <div className="orderTitle">Size:</div>
                     <div className="orderText">{item.size}</div>
                     <div className="orderTitle">Toppings:</div>
                     {item.pepperoni ? <div className="orderText">Pepperoni</div>:null}
                     {item.sausage ? <div className="orderText">Sausage</div>:null}
                     {item.onions ? <div className="orderText">Onions</div>:null}
                     {item.pineapple ? <div className="orderText">Pineapple</div>:null}
                     <div className="orderTitle">Special Instructions:</div>
                     <div className="orderText">{item.instructions}</div>

                 </>
             )
        })}

        </>
    )
}