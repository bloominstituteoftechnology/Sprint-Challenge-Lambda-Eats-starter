import React from 'react';
import {Link, Route} from 'react-router-dom';
import Form from './PizzaFrom';

const Homepage = props => (
    <div className='home'>
        <Link to='./PizzaForm' className='home-button'>Pizza!</Link>
    </div>
);
export default Homepage;