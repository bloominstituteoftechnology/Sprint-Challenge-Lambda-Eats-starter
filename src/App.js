import React from "react";
import {Route} from "react-router-dom"
import HomePage from './Component/HomePage'
import Pizza from "./Component/Pizza";
import './App.css'


const App = () => {
 
  return (
    <>
    <Route exact path="/">
      <HomePage/>
    </Route>
    <Route path="/pizza">
      <Pizza />
    </Route>
    </>
  );
};
export default App;
