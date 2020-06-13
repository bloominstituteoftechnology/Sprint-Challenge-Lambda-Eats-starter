import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Form from "./components/Form";
import Home from "./components/Home";



function App () {
  return (

    <Router>
      <div className="App">
      </div>

      <nav className="navbar">
        <Link to="/">
          <button name='home'>Home</button>
        </Link>

      <br />       
      <Link to="/form">
        <button name='order'>Order</button>
      </Link>
      </nav>
      
      <div className="App-header">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/order"
          render={props => {
            return null
          }}
          />
        </Switch>
      </div>
      </Router>
  
  );
};

export default App;