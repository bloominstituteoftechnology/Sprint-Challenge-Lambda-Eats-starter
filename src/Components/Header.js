import React from 'react';
import {NavLink} from "react-router-dom";
export default function Header(props){

    const initialColor = {
        color:'white',
        backgroundColor: 'black'
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

            <section className="banner">

                <h2>Your favorite food delivered while coding</h2>
                <NavLink to={'pizza'}><button className="pizzaButton">Pizza?</button></NavLink>

            </section>
        </header>
    )
}