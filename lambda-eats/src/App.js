import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Pizza from "./components/Pizza";


const App = () => {
  return (
    <div>
      <Nav />
        <Switch>
          <Route path="/Pizza" >
            <Pizza />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
};

export default App;