import React from "react";
import {Button, NavBar, Card, CardImg} from 'reactstrap'
import {Link} from 'react-router-dom'

const App = () => {
  return (
    <>
    <NavBar>
      <h1>Lambda Eats</h1>
      <Link to={'/'}>
        <Button>
          Home
        </Button>
      </Link>
      </NavBar>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
