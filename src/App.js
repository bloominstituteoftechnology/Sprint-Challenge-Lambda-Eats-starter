import React from "react";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import { Switch, Route } from "react-router-dom";

const App = () => {
  
  return (
    <div>
      <Switch>
        <Route path="/pizza" component={Pizza} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;