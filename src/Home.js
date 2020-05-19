import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components'

export default function Home() {
const Homepage = styled.button`
background-color: papayawhip;
text-allign: center;
margin: 20%;
margin-left: 45%;
`
    return(
        
            
               <Homepage>
                   <div>
                <div className='homeDiv'>
                    <h2 className='Rafiki'>Rafiki Pizza</h2>
                    <button className='homeButton'>
                        <Route>
                        <Link to='/Order'>Order Now</Link>
                        </Route>
                    </button>
                </div>
                </div>
                </Homepage>
           
        
    )
    }