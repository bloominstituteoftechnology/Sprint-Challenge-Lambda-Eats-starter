import React from "react";
import { BrowserRouter as Router,
   Route,
   Link,
   Switch
  } from 'react-router-dom';
import '../src/App.css';
import Form from './Form';
import Home from './Home';

const App = () => {
  return (
      <Switch>

        <Route exact path='/'>
          <Home />
          <Link to='/pizza'>Get Some Za - Routes to your Form page</Link>
        </Route>
        

        <Route path='/pizza'>
          <Form />
        </Route>

      </Switch> 
  );
};
export default App;