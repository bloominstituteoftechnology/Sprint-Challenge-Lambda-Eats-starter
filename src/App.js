import React from "react";
import {Route, Link} from "react-router-dom";
import pizza_form from "./component/pizza_form";

const App = () => {
  const []
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Hot pizza coming your way!</p>
      <div>
        <Route exact path="./component/pizza_form" component={pizza_form} />
      </div>
    </>
  );
};
export default App;
