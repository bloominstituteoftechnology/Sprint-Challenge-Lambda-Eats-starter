import React from "react";

// Components
import Header from './Header';
import Hero from './Hero';
import CTA from './CTA';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header>
        <h1>Lambda Eats</h1>
        <Link className="h5" exact to="/">Home</Link>
      </Header>
      <Hero>
        <CTA />
      </Hero>
    </Router>
  );
};
export default App;
