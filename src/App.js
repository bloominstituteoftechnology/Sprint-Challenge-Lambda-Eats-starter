import React from "react";
import Home from "./components/home"
import { Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Route exact path="/" componant={Home} />
    </>
  );
};
export default App;
