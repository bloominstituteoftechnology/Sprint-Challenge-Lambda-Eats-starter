import React from "react";
import MainHeader from './Components/Home';
import Form from './Components/Form';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route path='/pizza' component={Form}/>
      <Route exact path='/' component={MainHeader} />
    </>
  );
};
export default App;
