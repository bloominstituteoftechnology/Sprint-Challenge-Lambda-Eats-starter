import React from "react";
import Main from "./Main"
import Menu from "./Menu"
import { Route, Switch } from "react-router-dom";
import Pizza from "./Pizza"

const App = () => {
  return (
    <div>
      
      
      <Menu />
      <Switch>
        <Route exact path ="/">
          <Main />
        </Route>
        <Route>
          <Pizza />
        </Route>
      </Switch>

      </div>
  );
};
export default App;
