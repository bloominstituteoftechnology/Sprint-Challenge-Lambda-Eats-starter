import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './components.js/Homepage';
import Pizza from "./components.js/Pizza"

const App = () => {
  return (
    <>
      <Route exact path="/">
        <Homepage />
      </Route>
<Route path = "/pizza">
  <Pizza/>
</Route>
    </>
  );
};
export default App;
