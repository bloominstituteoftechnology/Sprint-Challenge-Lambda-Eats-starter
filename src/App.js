import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

const App = () => {
  return (
    <div className = "App">
      <nav>
        <h1>Lambda Eats</h1>
        <div className ="nav-links">
          <Link to = "/pizza">Pizza</Link>
          <Link to = "/">Home</Link>
        </div>
      </nav>
      <Route exact path="/"> 
      <Home home={Home}/>
      </Route> 
      <Route path="/pizza" component={Form}/>
    </div>
  );
};
export default App;
