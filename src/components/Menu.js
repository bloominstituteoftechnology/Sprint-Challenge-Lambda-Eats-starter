import React from 'react'; 
import {Link} from 'react-router-dom'; 

const Menu=() => {
    return (
        <nav className='menu'>
            <Link to="/">Home</Link>
            <Link to="Order">Order</Link>
        </nav>
    );
};

export default Menu;