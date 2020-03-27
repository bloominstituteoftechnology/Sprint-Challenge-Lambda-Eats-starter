import React from "react";
import Pizza from "./Form"
import {Link} from "react-router-dom";


export default function Home() {
    return(
        <div>
        <h1>Home Page</h1>
        <Link to="./pizza"><button>ORDER YOUR PIZZA</button></Link>
    </div>
    )
}