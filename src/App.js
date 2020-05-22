import React from "react";
import Home from './Home'
import PizzaForm from './PizzaForm'
import {BrowserRouter as Route, Link, Switch} from 'react-router-dom'

const App = () => {
  return (
    <div className='wrapper'>
        <nav>
            <Link to='/'>
                Home
            </Link>
            <Link to='/PizzaForm'>
                Pizza
            </Link>
        </nav>
    <div className='app'>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route path='/PizzaForm'>
                <PizzaForm />
            </Route>
        </Switch>
    </div>    
    
    </div>
  );
};
export default App;
