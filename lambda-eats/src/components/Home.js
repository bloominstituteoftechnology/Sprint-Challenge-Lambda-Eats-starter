import React from "react";
import { Link, Route } from "react-router-dom";
import { Image, Order } from "./Styles";

const Home = () => {

    return (
        <Order>
            <Image src ={require('./Pizza.jpg')} alt="Yummy Pizza" />
            <Route>            
                <Link to="/Pizza">Order Now!</Link>
            </Route>
        </Order>
    );
};

export default Home;