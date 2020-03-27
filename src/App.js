import React from "react";

import {Link, Route} from 'react-router-dom';

import Homepage from './components/homepage/Homepage.component'

import Form from './components/form/Form.component'



const App = () => {
  return (
    <>
    <nav>
      <h1>Lambda Eats</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/order' >Order</Link>
      </div>
     </nav>

      <Route exact path="/">
        <Homepage />
      </Route>    
      <Route path="/order">
        <Form />
      </Route>
    </>
  );
};
export default App;
