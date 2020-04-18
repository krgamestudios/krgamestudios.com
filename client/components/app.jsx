import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

//components
import Header from './panels/header.jsx';
import Footer from './panels/footer.jsx';

import MarkdownWrapper from './pages/markdown_wrapper.jsx';
import Redirect from './pages/redirect.jsx';

//lazy route loading (with error handling)
let LazyRoute = (lazyProps) => {
	const component = Loadable({
		loader: lazyProps.component,

		loading: (props) => {
			//handle lazy errors/warnings
			if (props.error) {
				console.log(props.error);
			} else if (props.timedOut) {
				console.log('lazy loading timed out');
			} else if (props.pastDelay) {
				return (
					<div className='page'>
						<p className='centered'>Loading...</p>
					</div>
				);
			}

			return null;
		},
		timeout: 10000
	});

	return <Route {...lazyProps} component={component} />;
};

//the app class
class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<Header />
				<div className='central'>
					<Switch>
						<LazyRoute exact path='/' component={() => import('./pages/home.jsx')} />
						<LazyRoute path='/games' component={() => import('./pages/games.jsx')} />
						<LazyRoute path='/coding' component={() => import('./pages/coding.jsx')} />
						<LazyRoute path='/about' component={async () => () => <MarkdownWrapper url={require('../../public/content/about.md').default} />} />

						<Route exact path='/astrangesinkingfeeling' render={()=><Redirect target='https://docs.google.com/document/d/1Mmcb4S62s7JyFaoNve9dH2MJwowu0JmK-A5mEMGPaY4/edit?usp=sharing' />} />
						<Route exact path='/candy' render={()=><Redirect target='https://candyraid.com/prototype' />} />

						<LazyRoute path='*' component={() => import('./pages/not_found.jsx')} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
