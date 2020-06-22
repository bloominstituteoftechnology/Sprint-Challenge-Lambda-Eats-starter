import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <Nav />
        
        <div className='pizza-hero'>
            <div className='link-container'>
            <Link className='form-link' to='/pizza'>Order Pizza!</Link>
            </div>
            
        </div>
        </>
        
        
    )
}

export default Home;