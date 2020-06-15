import React from "react";
import {Button,Navbar, Card, CardImg} from 'reactstrap'
import {Link, Route} from "react-router-dom"
import OrderForm from './OrderForm'


const App = () => {
  return (
    <>
    <Navbar>
      <h1>Lambda Eats</h1>
      <h2>Pizza, Pizza, Pizza!</h2>     
      <Link to ={'/'}>
        <Button>Home</Button>
      </Link> 
    </Navbar>
    <Route>
      <Card>
        <CardImg></CardImg>
        <Link>
          <Button>Order Here</Button>
        </Link>
      </Card>
    </Route>

      
    </>
  );
};
export default App;
