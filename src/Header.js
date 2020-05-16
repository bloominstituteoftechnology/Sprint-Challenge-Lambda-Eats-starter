import React from "react";
import {Link} from "react-router-dom";

export default function Header(){
    return (
        <header>
            <h1>Lambda Eats</h1>
            <Link to="/">
                <button type="button">Home</button>
            </Link>
            <Link to="/pizza">
                <button type="button">Order</button>
            </Link>
      </header>
    )
}