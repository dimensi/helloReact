import { render } from 'react-dom';
import React from 'react';
import getStore from './store';
import { Provider }  from 'react-redux';
import App from './containers/App';
import './index.css';

const store = getStore(
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);