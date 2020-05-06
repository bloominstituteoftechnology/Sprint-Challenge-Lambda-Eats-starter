import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    return(
        <>
            <div>
                <img className='pizza-img' src={require('../Assets/Pizza.jpg')} alt='Fresh baked pizza'/>
                <div className='homeDiv'>
                    <h2 className='homeH2'>You Relax, We Deliver</h2>
                    <button className='homeButton'>
                        <Link to='/pizza'>Get Started</Link>
                    </button>
                </div>
            </div>
        </>
    );


}