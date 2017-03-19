'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';

/*------ COMPONENTS/CONTAINERS ------ */
import Root from './components/Root';
import Table from './components/table/table.container';
import Tabs from './components/tabs/tabs.component';

/*------ ACTIONS ------ */
import { fetchPeople } from './components/table/table.reducer';

//load all the users from the database
const onEnterGetPeople = nextState => {
	store.dispatch( fetchPeople() );
};


ReactDOM.render(
  <Provider store={store}>
		<Router history={browserHistory}>
			<Route component={Root}>
				<Route path="/" component={Tabs} onEnter={onEnterGetPeople} />
			</Route>
	</Router>
  </Provider>,
  document.getElementById('app'));

