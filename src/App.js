import React from "react";
import PizzaMaker from "./components/pizzaMaker"
import { Route, Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <div><Link to={'/'}>Home</Link></div>
      <div> <Link to={'/pizza'}>Pizza?</Link></div>
      <Route exact path="/" componant={App} />
      <Route exact path="/pizza" component={PizzaMaker} />
    </>
  );
};
export default App;
