import React from "react";
import Form from "./Form/Form"
import Home from "./Home"
import OTW from "./OTW"
import './App.css';
import { BrowserRouter as Router, Route,Link, Switch } from "react-router-dom";
const App = () => {
  return (
    <div className ="App" >
    <Router>
      <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route eaxact path = "/Order">
        <Form/>
        </Route>
        <Route path = "/Done">
          <OTW/>
        </Route>
      </Switch>
       </Router>
       </div>
  );
};
export default App;
