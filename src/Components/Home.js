import React from "react";
import headerImg from './Assets/Pizza.jpg';
import { Link } from 'react-router-dom';


const MainHeader = () => {
  return (
<header className = "headerContainer">
  <h1>Lambda Eats</h1>
      <div className='navButtons'>
      <button>
        <Link exact to="/">Home</Link>
      </button>
  <button>
    <Link to="/pizza">Order</Link>
    </button>
     </div>
     <div className='headerImg'>
  <img src={headerImg} alt='Pizza' />
  </div>
</header>
)}

export default MainHeader;