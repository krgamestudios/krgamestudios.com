import React from 'react';
import ReactDOM from 'react-dom';

//styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/shared.css';

import App from './components/app.jsx';

//start the process
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
