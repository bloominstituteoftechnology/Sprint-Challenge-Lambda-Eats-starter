import React from "react";
import MainHeader from './Components/Home';
import Form from './Components/Form';
import { Route, Link} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
    <div className='navButtons'>
      <button>
        <Link exact to="/">Home</Link>
      </button>
    <button>
    <Link to="/pizza">Order</Link>
    </button>
     </div>
      <Route path='/pizza' component={Form}/>
      <Route exact path='/' component={MainHeader} />
    </>
  );
};
export default App;
