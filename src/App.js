import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './Components/Homepage';


const App = () => {
 
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path='/'>
        <Homepage/>
      </Route>

    </>
  );
};
export default App;
