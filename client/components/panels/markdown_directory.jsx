import React from 'react';
import PropTypes from 'prop-types';

import Markdown from './markdown.jsx';

class MarkdownDirectory extends React.Component {
	constructor(props) {
		super(props);

		if (!props.root) {
			throw "MarkdownDirectory needs a root directory";
		}

		this.state = {
			root: props.root,
			content: null,
		};
	}

	componentDidMount() {
		fetch(this.state.root + 'index.json')
			.then(result => result.json())
			.then(result => result.map(name => fetch(this.state.root + name).then(result => result.text()) ))
			.then(result => Promise.all(result))
			.then(result => this.setState({ content: result }))
		;
	}

	render() {
		if (this.state.content) {
			return (
				this.state.content.map((entry, index) => {
					return (
						<div key={index} className='panel'>
							<hr />
							<Markdown content={entry} />
						</div>
					);
				})
			);
		}

		return (
			<p className='centered'>Loading markdown...</p>
		);
	}
};

MarkdownDirectory.propTypes = {
	root: PropTypes.string.isRequired
};

export default MarkdownDirectory;