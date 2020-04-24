  
import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import Home from "./components/Home.js";
import Form from "./components/Form.js"

const App = () => {
  return (
      
    <div className="App">
      <h1>Lambda Eats</h1>
      <Route exact path="/" component={Home}/>
      <Route path="/pizza" component={Form}/>
  </div>
  );
};
export default App;
//dividing line
