import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='page'>
				<div className='panel centered' style={{alignItems:'center'}}>
					<h1>Not Found</h1>
					<Link to='/' style={{maxWidth: '710px', width: '100%'}}>
						<img src='/img/404.png' width="100%" />
					</Link>
				</div>
			</div>
		);
	}
}

export default NotFound;