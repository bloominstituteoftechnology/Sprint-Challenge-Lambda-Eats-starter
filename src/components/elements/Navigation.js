import React from 'react'
import { Route, Link, Switch } from "react-router-dom";
 import Header from './Header'
export const Navigation = () =>{

    return (
        <>
        <nav>
            <h1 className="store-header">Andre's Pizza - Fagedhabboutitt!</h1>
            <div className="nav-links">
                <Link to="/">Home | </Link> 
                <Link to="/order-pizza">Order Pizzzaaaa</Link>
            </div>
        </nav>
        <Header />
        </>
    )
    }
export default Navigation