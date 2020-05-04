import React from "react";
import { Link, Route } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <h1>Lambda Eats!</h1>
            <button>Home</button>
            <button>Help</button>

            <img className="home-img" src ="/Asset/Pizza.jpg" alt="Yummy Pizza" />
            <Route>            
                <Link to="/Pizza">Order Now!</Link>         
            </Route>
        </div>
    );
    
    
};

export default Home;