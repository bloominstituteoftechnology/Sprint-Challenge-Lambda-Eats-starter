import React from 'react';
import {NavLink} from "react-router-dom";
export default function Header(props){

    const initialColor = {
        color:'white',
        backgroundColor: 'black'
    }

    const pizzaOrder = {
        width:'70%',
        margin:'auto',
        height:'500px'
    }
    return(
        <header>
            <nav>
                <div className="titleDiv"><h1>Lambda Eats</h1></div>

                <div className="linkDiv">

                    <NavLink to={'/'}><div className="link" style={initialColor}>Home</div></NavLink>
                    <div className="link">Help</div>

                </div>
            </nav>

            <section className="banner" style={pizzaOrder}>

                <h2>{props.head}</h2>
                <p>{props.tail}</p>


            </section>
        </header>
    )
}