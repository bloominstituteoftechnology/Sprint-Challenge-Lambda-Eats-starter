import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className='nav-header'>
        <h1>Lambda Eats</h1>
      </div>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza Builder</Link>
      </div>
    </nav>
  );
}

export default NavBar;