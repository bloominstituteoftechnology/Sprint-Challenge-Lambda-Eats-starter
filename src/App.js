import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Button, Card, CardImg } from 'reactstrap';
import OrderForm from './OrderForm';

const App = () => {
  return (
    <Router>
      <Navbar color='success'>
        <h1>Pizza By The Code</h1>
        <Link to='/'>
          <Button outline color='warning'>Home</Button>
        </Link>
        <Button outline color='warning'>Help</Button>
      </Navbar>
      <Route exact path='/'>
        <Card>
          <CardImg src={require('./Pizza.jpg')} />
          <Link to='/pizza'>
            <Button style={{ position: 'absolute', left: '50%', top: '50%' }} color='warning'>Pizza?</Button>
          </Link>
        </Card>
      </Route>
      <Route path='/pizza'>
        <OrderForm />
      </Route>

    </Router>
  );
};
export default App;
