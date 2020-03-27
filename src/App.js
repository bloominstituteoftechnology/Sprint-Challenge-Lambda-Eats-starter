// import axios from "axios";
import "./App.css";
import React, {useState, useEffect} from "react";
// import * as yup from "yup";
import Pizza from "./Form"
import {Link, Route} from "react-router-dom";
import Home from "./Home"

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/pizza'>
          <Pizza />
        </Route>  
    </div>
  );
};
export default App;
