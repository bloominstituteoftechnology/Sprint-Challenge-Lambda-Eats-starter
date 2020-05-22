import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './Components/Homepage';
import Form from './Components/PizzaFrom';


const App = () => {
 
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path='/'>
        <Homepage/>
      </Route>
      <Route path='/PizzaForm'>
          <Form/>
      </Route>

    </>
  );
};
export default App;
