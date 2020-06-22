import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

const getHelp = () => {
    alert('call 1-800-123-4567')
}

return (
<>

    
    <nav className="top-nav">
        <div className='nav-left'>
            <h2> LAMBDA EATS</h2>
        </div>
        <div className='nav-buttons'>
            <div><Link to='/'>Home</Link></div>
            <div id='help' onClick={getHelp}>Help</div>
        </div>        
    </nav>
</>);
};

export default Nav;