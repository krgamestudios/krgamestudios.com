import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		const linkStyle = {
			color: '#fefefe',
			minWidth: '80px',
			textAlign: 'center',
			alignSelf: 'center'
		};

		return (
			<header className='panel'>
				<div className='panel centered mobile hide' style={{flexDirection: 'row'}}>
					<Link href='/' style={linkStyle}>Home</Link>
					<Link href='/games' style={linkStyle}>Games</Link>
					<Link to='/'>
						<img src='/img/logo_400x400.png' width='80px' />
					</Link>
					<Link href='/coding' style={linkStyle}>Coding</Link>
					<Link href='/about' style={linkStyle}>About</Link>
				</div>

				<div className='panel centered mobile show'>
					<Link to='/'>
							<img src='/img/logo_400x400.png' width='80px' />
					</Link>

					<div className='panel' style={{flexDirection: 'row'}}>
						<Link href='/' style={linkStyle}>Home</Link>
						<Link href='/games' style={linkStyle}>Games</Link>
						<Link href='/coding' style={linkStyle}>Coding</Link>
						<Link href='/about' style={linkStyle}>About</Link>
					</div>
				</div>
			</header>
		);
	}
};

export default Header;