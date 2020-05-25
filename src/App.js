import React from "react";
import { Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Form from './components/Form';
import "./App.css";
// import { Route } from "react-router-dom";
// import Home from "./Home";
// import Pizza from "./Pizza";

const App = () => {
  return (
    <div className="App">
    <header>
      <Nav />
      <h1>Lambda Eats</h1>
      <Route exact path="/">
        <Home />
      </Route>
    </header>
    <Route exact path="/pizza">
      <Form />
    </Route>
  </div>
);
};
export default App;