import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Route exact path="/" component={Home} /> {/* this is a route for home */}
			<Route path="/pizza" component={Form} /> {/* this is a route for form */}
		</div>
	);
};
export default App;
