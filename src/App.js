import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import "./App.css";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <div className="nav-links">
        <Link to="/">Home &nbsp; </Link>
        <Link to="/pizza">Pizza</Link>
      </div>
      <Switch>
        <Route path="/pizza" component={Pizza} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};
export default App;
