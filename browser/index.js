'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';

/*------ COMPONENTS/CONTAINERS ------ */
import Root from './components/Root';
import Tabs from './components/tabs/tabs.component';

console.log('Hai Spotify! I would love to work for you :)');

ReactDOM.render(
  <Provider store={store}>
		<Router history={browserHistory}>
			<Route component={Root}>
				<Route path="/" component={Tabs} />
				<IndexRoute component={Tabs} />
			</Route>
	</Router>
  </Provider>,
  document.getElementById('app'));

