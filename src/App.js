import React, { useState } from "react";
import Form from "./Form";
import Pizza from "./Pizza";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route>
        <Form />
      </Route>
      <Route>
        <Pizza />
      </Route>
    </>
  );
};
export default App;
