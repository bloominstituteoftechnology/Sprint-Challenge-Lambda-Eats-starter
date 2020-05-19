import React from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav>
        <h1 className="pizza-header">Lambda Eats!</h1>
        <div className="nav-links">
          <Link to="/pizza">Pizza</Link>
          <Link to="/">Home</Link> 
        </div>
      </nav>
      <Route exact path = "/">
          <Home home={Home}/>
      </Route>
      <Route path = "/pizza" pizza={Form}></Route>


      
      
    </>
  );
};
export default App;
