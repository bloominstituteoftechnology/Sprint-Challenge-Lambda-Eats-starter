import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Navigation from './components/elements/Navigation'
import Header from './components/elements/Header'
import PizzaForm from './components/PizzaForm'

function App() {
  return (
    <div className="App">
      <Navigation />
    
    <Switch>
      {/* Route paths are expected shapes of the URL, similar to a regular expression (regex). 
        Routes with ":" indicate that there will be some string value that will be stored 
        as a PARAM with the key indicated after the :. In this case the param object would be:
        { itemId: <value in browser URL path> }*/}
      <Route path="/order-pizza">
        {/* Wrapped Components will not receive Route props (like Home), because it does not use a render method described here: https://reacttraining.com/react-router/web/api/Route/route-render-methods
          However, we can now pass state through props when rendering JSX. To access Route values, we can use HOOKS such as useParams, and useRouteMatch to access values passed in render methods.
          */}
          <PizzaForm />;
      </Route>
      <Route
        path="/order-pizza"
        render={props => {
          return null
        }}
      />
      {/* component={Home} passes Home as a variable to render when path matches. This is using a render method that passes Route props into Home, such as 'history', 'location', and 'match', 
      however it does not allow us to declare props on Home, since HOme is a variable and not JSX */}
        <Route path="/" />
    </Switch>
    </div>
  );
}

export default App;
