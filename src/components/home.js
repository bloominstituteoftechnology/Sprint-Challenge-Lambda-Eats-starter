import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

	return (
		<div className='top-content'>
			<p>Please click the Pizza button to order!</p>
			<Link to='/pizza'>
				<button className='pizza-order'>Pizza Order</button>
			</Link>

		</div>
	);
};
export default Home;
