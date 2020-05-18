import React from "react";
import Form from "./Form/Form"
import Home from "./Home"
import './App.css';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
const App = () => {
  return (
    <>
    <Router>
      <Route exact path = "/" component = {Home}/>
      <Route path = "/Order" componet = {Form}/>
      
      </Router>
    </>
  );
};
export default App;
