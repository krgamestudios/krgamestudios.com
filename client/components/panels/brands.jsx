import React from 'react';

class PanelBrands extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let img = {
			width: '32px'
		};

		return (
			<div className='panel' style={{flexDirection: 'row'}}>
				<a href="https://facebook.com/KRGameStudios">
					<img src="/img/facebook.png" style={img} />
				</a>

				<a href="https://twitter.com/KRGameStudios">
					<img src="/img/twitter.png" style={img} />
				</a>

				<a href="https://github.com/KRGameStudios">
					<img src="/img/github.png" style={img} />
				</a>

				<a href="https://discord.gg/FQmz8TN">
					<img src="/img/discord.png" style={img} />
				</a>

				<a href="https://www.patreon.com/krgamestudios">
					<img src="/img/patreon.png" style={img} />
				</a>
			</div>
		);
	}
}

export default PanelBrands;