import React from "react";
import headerImg from './Assets/Pizza.jpg';
import './Header.css';


const MainHeader = () => {
  return (
<header className = "headerContainer">
  <h1>Lambda Eats</h1>
     <div className='headerImg'>
  <img src={headerImg} alt='Pizza' />
  </div>
</header>
)}

export default MainHeader;