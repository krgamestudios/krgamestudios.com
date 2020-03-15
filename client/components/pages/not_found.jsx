import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

class NotFound extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='page'>
				<div className='panel centered' style={{alignItems:'center'}}>
					<h1>Not Found</h1>
					<LinkContainer to='/' style={{maxWidth: '710px', width: '100%', height: 'auto'}}>
						<img src='/img/404.png' />
					</LinkContainer>
				</div>
			</div>
		);
	}
}

export default NotFound;