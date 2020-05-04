import React, { useState } from 'react';
import './index.css';
import Home from './Components/Home';
import Form from './Components/Form';
import { Route, Link, Switch } from 'react-router-dom';


export default function App() {
 
  const [pizza, setPizza] = useState('');
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
         
          <Link to="/">Home</Link>
          <Link to="/pizza">Build Your Pizza!</Link>
        </div>
      </nav>
      
      <Switch>
       
        <Route path="/pizza">
         
          <Form pizza={pizza} />
        </Route>
        
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}