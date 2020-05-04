import React from "react";
import { useHistory } from "react-router-dom";

function Header() {


    return (
        <div className="Header-wrapper">
            <img
                className="home-image"
                src="./images/andres-pizza.png"
                alt="Hello Header"
            />
         
        </div>
    );
}

export default Header;
