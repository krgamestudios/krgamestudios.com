import React from 'react';

import Brands from '../panels/brands.jsx';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='page'>
				<Brands />
				<h1>Welcome!</h1>
				<hr />
				<p>The latest project goes here.</p>
			</div>
		);
	}
}

export default Home;