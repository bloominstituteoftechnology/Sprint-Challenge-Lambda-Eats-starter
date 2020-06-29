import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import "./App.css";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <div className="nav-links">
        <Link to="/">Home &nbsp; </Link>
        <Link to="/pizza">&nbsp;Pizza</Link>
      </div>
       <Route exact path="/" component={Home} />
        <Route path="/pizza" component={Pizza} />
    </>
  );
};
export default App;
