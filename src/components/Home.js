import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="bg-img">
			<span className="landing-info">
				<h1>Lambda Eats</h1>
				<Link to="/pizza">
					<button>Order Now</button>
				</Link>
			</span>
		</div>
	);
};

export default Home;
