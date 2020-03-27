import React from 'react'
import Pizza from '../../Assets/Pizza.jpg'

import {Link} from 'react-router-dom'


const Homepage = () => {

    return(
        <>
            <h1>Homepage</h1>
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