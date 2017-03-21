import { combineReducers } from 'redux';
import { people, showNoPeopleError, editingPerson, modalOpen  } from './components/table/table.reducer';
import { userNotFound, foundUser } from './components/view-by-id/view-by-id.reducer';
import { justAddedPerson, foundUserAdded } from './components/add-new/add-new.reducer';

const rootReducer = combineReducers( {
	people,
	showNoPeopleError,
	userNotFound,
	foundUser,
	modalOpen,
	editingPerson,
	justAddedPerson,
	foundUserAdded
});

export default rootReducer;

