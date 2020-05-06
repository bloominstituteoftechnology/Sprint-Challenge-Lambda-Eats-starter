import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from './components/Form';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/pizza'>Order</Link>
          </li>
      </nav>

      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pizza' component={Form} />
      </Switch>
    </>
  );
};
export default App;
