import React from "react";
import { Route, Switch, Link } from 'react-router-dom'; 
import Form from './Form';
import Home from './Home';

const App = () => {
  return (
    <div className='App-header'>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
      </div>
      <Switch>
        <Route path='/pizza'>
          <Form />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
