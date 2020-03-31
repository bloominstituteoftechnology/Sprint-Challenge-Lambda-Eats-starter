import React from 'react';
import { Link } from 'react-router-dom';
import homePizzaImg from './Pizza.jpg';
import './Homepage.css';
const Homepage = () => {
  return (
    <div class="home_wrapper">
      <h1 className="title">Lambda Eats</h1>
      <img className="homePizzaImg" src={homePizzaImg} alt="homepage_image" />
      <Link class="link" to="/pizza">
        
          <button class="orderButton">Order a Pizza!</button>
      
      </Link>
    </div>
  );
};

export default Homepage;
