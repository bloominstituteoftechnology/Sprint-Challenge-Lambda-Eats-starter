import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Welcome To Lambda Eats</h1>
            <h2>We have a passion for Pizza!</h2>
            <img className="t-shirt" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <h3>click here to customize your Pizza!  <span>👇</span></h3>
            <Link className="flexin" to={"/pizza"}>
                <div>Get Orderin'</div>
            </Link>
        </div>
    )
}

export default Home;