import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import { Body, Name } from "./components/Styles";


const App = () => {
  return (
    <Body>
      <Name>Lambda Eats!!!</Name>
        <Link to="/">
          <button>Home</button>                    
        </Link>
      <button>Help</button>
      <Switch>
        <Route path="/Pizza" component={Pizza} />
        <Route path="/" component={Home} />
      </Switch>
    </Body>
  );
};

export default App;