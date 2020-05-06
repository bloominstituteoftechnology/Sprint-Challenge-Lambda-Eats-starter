import React from "react";
import "./index.css";
import Form from "./Form";
import Navbar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import Library from "./Library";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
