import React from "react";
import {Route,Link,Switch} from 'react-router-dom';
import Home from './components/Home'
import Pizza from './components/Pizza'
import Order from './components/Order'

const App = () => {
  return (
    <div className="main">
      <nav>
        <h1>Lambda's Pizza Shop</h1>
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Pizza</Link>
          </div>
        </nav> 

        <Switch>

            <Route path='/pizza'>
              <Pizza />
            </Route>
            <Route path='/'>
              <Home/>
              </Route>

              
          </Switch>
    
    </div>
  );
};
export default App;
