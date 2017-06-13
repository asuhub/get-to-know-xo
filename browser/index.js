'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import '@xo-union/tk-css-essentials';

/*------ COMPONENTS/CONTAINERS ------ */
import Root from './components/Root';
import Tabs from './components/tabs/tabs.component';
import Profile from './components/profile';
import Homepage from './components/homepage';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route component={Root}>
				<Route path="/stephaniemanwaring" component={Profile} />
				<Route path="/" component={Homepage} />
				<IndexRoute component={Tabs} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app'));

