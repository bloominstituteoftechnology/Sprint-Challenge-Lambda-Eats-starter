import React from "react";
import Pizza from "./components/Pizza"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from "./components/Home"

const App = () => {
  return (
    <>
    <h1>Lambda Eats</h1>
      <p>Let's eat!</p>
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pizza">Order Pizza</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/pizza">
          <Pizza />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
    </>
  );
};
export default App;
