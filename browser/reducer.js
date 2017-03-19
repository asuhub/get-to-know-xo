import { combineReducers } from 'redux';
import { people, showNoPeopleError } from './components/table/table.reducer';
import { userNotFound } from './components/view-by-id/view-by-id.reducer';

const rootReducer = combineReducers( {
	people,
	showNoPeopleError,
	userNotFound
});

export default rootReducer;

