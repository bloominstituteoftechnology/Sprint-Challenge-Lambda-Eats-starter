import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './components/Form.js';

const App = () => {

  return (
    <div className="app">
    <Router>
      <div className = 'header'>
          <h1 className = 'site-name'>Lambda Pizza</h1>
          <img src={require('./img/usethis.jpg')}/>
          <button><Link to="/">Home</Link></button>
          <Route exact path="/" />
          <button><Link to="/pizza">Place Order!</Link></button>
          <br></br>
          <Route path="/pizza" component={Form} />
      </div>
    </Router>
    </div>
  );
};

export default App;