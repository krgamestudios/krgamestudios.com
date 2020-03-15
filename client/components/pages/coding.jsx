import React from 'react';

import MarkdownDirectory from '../panels/markdown_directory.jsx';

class Coding extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='page'>
				<h1>Coding</h1>
				<MarkdownDirectory root='/content/coding/' />
			</div>
		);
	}
}

export default Coding;