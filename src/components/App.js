import React from "react";

// Components
import Header from './Header';
import Hero from './Hero';
import CTA from './CTA';
import { Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header>
        <h1>Lambda Eats</h1>
        <Link className="h5" exact to="/">Home</Link>
      </Header>

      <Switch>
        <Route path="/pizza"></Route>
        <Route path="/">
          <Hero>
            <CTA />
          </Hero>
        </Route>
      </Switch>
    </>
  );
};
export default App;
