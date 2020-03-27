import React from 'react';
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <nav>

            <h1>Lambda Eats</h1>
            <div><Link to={'/'}>Home</Link></div> 
            <div link to={'/pizza'}>Pizza?</div>

        </nav>

    )
}

export default HomePage;