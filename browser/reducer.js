import { combineReducers } from 'redux';
import { people, showNoPeopleError, editingPerson, modalOpen  } from './components/table/table.reducer';
import { userNotFound, foundUser } from './components/view-by-id/view-by-id.reducer';

const rootReducer = combineReducers( {
	people,
	showNoPeopleError,
	userNotFound,
	foundUser,
	modalOpen,
	editingPerson
});

export default rootReducer;

