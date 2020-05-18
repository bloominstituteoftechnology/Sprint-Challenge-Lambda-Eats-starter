import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    return(
        
            <div>
               
                <div className='homeDiv'>
                    <h2 className='Rafiki'>Rafiki Pizza</h2>
                    <button className='homeButton'>
                        <Link to='/Order'>Get Started</Link>
                    </button>
                </div>
            </div>
        
    )
    }