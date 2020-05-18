import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Homepage from './Components/Homepage';
import Form from './Components/PizzaFrom';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Router exact path='/'>
        <Homepage/>
        <Form/>
      </Router>
    </>
  );
};
export default App;
