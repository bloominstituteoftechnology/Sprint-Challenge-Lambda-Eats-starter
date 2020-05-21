
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './Form';
import Home from './Home';

function App() {
  return (
    //enrutar
    <Router>

      <nav className="navbar">
        <Link to="/">
          <button name='homebutton'>Home</button>
        </Link>
        <br />
        <Link to="/form">
          <button name='orderbutton'>Order</button>
        </Link>
      </nav>
      <div className="App-header">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



















