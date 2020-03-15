import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

class Header extends React.Component {
	render() {
		const linkStyle = {
			color: '#fefefe'
		};

		return (
			<header className='page-header centered'>
				<LinkContainer to='/'>
					<img src='/img/logo_400x400.png' />
				</LinkContainer>

				<Nav>
					<Nav.Item>
						<Nav.Link href='/' style={linkStyle}>Home</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href='/games' style={linkStyle}>Games</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href='/coding' style={linkStyle}>Coding</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href='/about' style={linkStyle}>About</Nav.Link>
					</Nav.Item>
				</Nav>
			</header>
		);
	}
};

export default Header;