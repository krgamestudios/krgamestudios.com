import React from 'react';

import Brands from '../panels/brands.jsx';
import Markdown from '../panels/markdown.jsx';

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
				<div className='table'>
					<div className='row'>
						<div className='col'>
							<Markdown url={require('../../../public/content/competition_short.md').default} />
						</div>
					</div>

					<hr />

					<div className='row'>
						<div className='col' style={{alignItems: 'flex-start'}}>
							<Markdown url={require('../../../public/content/games/potion_school.md').default} />
						</div>

						<div className='col' style={{alignItems: 'flex-start'}}>
							<Markdown url={require('../../../public/content/games/egg_trainer.md').default} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
