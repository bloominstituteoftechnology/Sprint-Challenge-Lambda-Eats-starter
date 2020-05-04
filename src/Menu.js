import React from "react";
import { Link } from "react-router-dom";
import "./index.css";


const Menu = () => {
  return (
//enlazar 
    <nav className = "menu"> 
    
      <Link to="/">Home</Link>
      <Link to="Pizza">Order</Link>
    </nav>
  );
};

export default Menu;
