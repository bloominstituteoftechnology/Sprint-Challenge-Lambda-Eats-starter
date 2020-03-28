import React from "react";
import Pizza_Form from "./component/pizza_form";
import Home from "./component/Home";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

function App() {

  return (
<div>

      <nav className="navbar">
          <Link to="/"> Home
            {/* <button name = 'homebutton'>Home</button> */}
            </Link>
          <br/>
          <Link to="/component/pizza_form"> Order a Pizza!
          {/* <button to name = 'orderbutton'>Order a Pizza!</button> */}
          </Link>

      </nav>
      <h1>Lambda Eats</h1>
      <p>Hot pizza coming your way!</p>
      <div className="App">

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/component/pizza_form">
          <Pizza_Form/>
        </Route>

      </div>
    </div>
  );
};
export default App;
