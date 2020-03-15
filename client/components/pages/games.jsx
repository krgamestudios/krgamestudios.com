import React from 'react';

import MarkdownDirectory from '../panels/markdown_directory.jsx';

class Games extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='page'>
				<h1>Games</h1>
				<MarkdownDirectory root='/content/games/' />
			</div>
		);
	}
}

export default Games;