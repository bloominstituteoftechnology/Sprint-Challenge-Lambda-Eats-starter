import React from 'react'
import Pizza from '../../Assets/Pizza.jpg'

import {Link} from 'react-router-dom'

import './Homepage.styles.css'


const Homepage = () => {

    return(
        <>
            <h2>Don't Hold Your Craving</h2>
            <img 
                className="PizzaImg"
                src={Pizza}
                alt="homepage pizza"
            />
            <Link to='/order' className="OrderButton">Order Now!</Link>
        </>
    )
}

export default Homepage