import React from 'react';
import { Link } from 'react-router-dom';
import pizza from '../images/pizza.jpg';

import styled from "styled-components";

const PizzaImg = styled.img`
    margin-left: 20%;
    width: 20%;
`;


const Home = () => {       // explain difference between arrow function and export default function
	return (
		<div className="Home">
            <div className="homeHeader">
                <header>
                    <h1>Lambda Eats</h1>
                </header>
            </div>
            <div className="middle">
                <div className="pizzaBanner">
                    <PizzaImg src={pizza} alt="pizza-banner"/>
                    <br />

                    <Link to="/pizza" >
                        <button> Build your pizza! </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}



export default Home; 