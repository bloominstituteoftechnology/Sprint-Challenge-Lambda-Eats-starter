import React from "react";
import { Button, Card, CardImg, Navbar } from 'reactstrap'
import { Route, Link } from 'react-router-dom'
import Order from './Form.js'
const App = () => {
  return (
    <>
    
    <Navbar color='info'>
      <h1 style={{ color: 'white '}}>Lambda Eats</h1>
      <Link to={'/'}>
        <Button color='info'>
          Home
        </Button>
      </Link>
      </Navbar>

      <Route excat path='/'>
      <Card color='info'>      
      <CardImg src={require('./Assets/Pizza.jpg')} style={{width:'75%', margin: '0 auto'}}/>
            <p style={{position:'absolute', top: '30%', left: '48%', color:'white'}}>Make Your Pizza</p>
            <Link to={'/pizza'}>
      <Button color='info' style={{position: 'absolute', left: '50%', right: '50%', top:'50%'}}>
        Pizza?
      </Button>
      </Link>
      </Card>
      </Route>

      <Route path='/pizza'>
      <Order/>
      </Route>
      
    </>
  );
};
export default App;
