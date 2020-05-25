import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm';

const App = () => {
  return (
    <div className="app-container">

      <div className="routes">
        <Switch>
          <Route path="/pizza" component={PizzaForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>


    </div>
  );
};

export default App;
