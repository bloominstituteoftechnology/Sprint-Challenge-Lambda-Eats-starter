import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import '../src/App.css';
import Form from './Form';
import Home from './Home';

const App = () => {
  return (
      <Switch>

        <Route exact path='/'>
          <Home />
          
        </Route>
        

        <Route path='/pizza'>
          <Form />
        </Route>

      </Switch> 
  );
};
export default App;