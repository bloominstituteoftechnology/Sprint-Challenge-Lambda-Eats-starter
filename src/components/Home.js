import React from 'react';
import {Link, Route} from 'react-router-dom';
import pizzaForm from './Form';
import * as Yup from 'yup';


const Home = () => {


    return (

        <section>
            
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/pizza" >Pizza</Link>

        </nav>

        <Route exact path="/">

            <h1>Welcome to Lambda Eats!</h1>

        </Route>

        <Route path="/pizza" component={pizzaForm} />



        </section>


    )



}

export default Home;