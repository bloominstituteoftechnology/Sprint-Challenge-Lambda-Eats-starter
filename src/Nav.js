import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

return (
<>
<header className='header'>
        <h1>Food For Days</h1>
    </header>
    
    <nav className="top-nav">
        <div className='nav-left'>
            <h2> LAMBDA EATS</h2>
        </div>
        <div className='nav-buttons'>
            <div><Link to='/'>Home</Link></div>
            <div>Help</div>
        </div>        
    </nav>
</>);
};

export default Nav;