import React, { useState } from "react";

import Pizza from "./Pizza";
import Home from "./Home";
import { Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>

      <Route path="/Pizza" component={Pizza} />

      <Route exact path="/" component={Home} />
    </>
  );
};
export default App;

//add switch
