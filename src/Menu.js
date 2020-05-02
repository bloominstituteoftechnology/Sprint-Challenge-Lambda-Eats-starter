import React from "react";
import { Link } from "react-router-dom";


const Menu = () => {
  return (

    <nav className = "menu"> 
    
      <Link to="/">Home</Link>
      <Link to="Pizza">Ordenar</Link>
    </nav>
  );
};

export default Menu;
