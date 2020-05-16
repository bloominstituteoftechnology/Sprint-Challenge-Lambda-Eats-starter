import React from "react";
import {Route, Link} from "react-router-dom"

import Pizza from "./Pizza";
import hero from "./HeroImg.jpg"
import '../App.css'


const HomePage = (props) => {
  
  return (
    <>
      
      <Route path="/pizza" component={Pizza}/>
      
      <h1 className="App">Welcome to Panucci's Pizza</h1>
      <nav>
      <Link to="/"><button>Home</button></Link>
      <Link><button>About</button></Link>
      <Link to="/pizza"><button>Create your own Pizza</button></Link>
      <Link><button>Contact Us</button></Link>
      </nav>
      <Link to="/pizza">
        <img className="panucci" src={hero} alt="Welcome to Panucci's Pizza"/>
      </Link> 
      <h3 className="sad">Don't make Seymour sad.  <br /> Buy a pizza. <br /> Buy three pizzas.</h3>
     
      
      
      
    </>
  );
};
export default HomePage;