import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
export const LOAD_PEOPLE = 'LOAD_PEOPLE';
export const NO_PEOPLE_FOUND = 'NO_PEOPLE_FOUND';
export const ADD_USER = 'ADD_USER';
export const TOGGLE_EDIT_PERSON = 'TOGGLE_EDIT_PERSON';
export const EDIT_PERSON = 'EDIT_PERSON';

/* -----------------    ACTION CREATORS     ------------------ */
export const setPeople = people => {
  return {
    type: LOAD_PEOPLE,
    people
  };
};

export const noPeopleError = (boolean) => {
  return {
    type: NO_PEOPLE_FOUND,
    boolean
  };
};

export const addUser = (createdUser) => {
  return {
    type: ADD_USER,
    createdUser
  };
};

export const toggleEditPerson = boolean => {
  return {
    type: TOGGLE_EDIT_PERSON,
    boolean
  };
};

export const personToEdit = (personId) => {
  return {
    type: EDIT_PERSON,
    personId
  };
};

/* ------------       ASYNC ACTIONS     ------------------ */
export const fetchPeople = () => {
  return dispatch => {
    axios.get(`/api/people`)
      .then(res => {
        if (res.status === 204 ) {
          dispatch( noPeopleError(true) );
        } else {
          dispatch( setPeople(res.data) );
        }
      })
      .catch(err => console.log(err));
  };
};

export const deleteUserFromDb = (id) => {
  return dispatch => {
    axios.delete(`/api/people/${id}`)
      .then(res => dispatch( fetchPeople() ) )
      .catch(err => console.log(err));
  };
};


/* ------------       REDUCER    ------------------ */
export const people = (state = [], action) => {
  const newState = state.slice(0);
	switch (action.type) {
		case LOAD_PEOPLE:
			return action.people;
		case ADD_USER:
			return newState.concat(action.createdUser);
		default: return state;
	}
};

export const showNoPeopleError = (state = false, action) => {
	switch (action.type) {
		case NO_PEOPLE_FOUND:
			return action.boolean;
		default: return state;
	}
};

export const modalOpen = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_EDIT_PERSON:
			return action.boolean;
		default: return state;
	}
};

export const editingPerson = (state = null, action) => {
	switch (action.type) {
		case EDIT_PERSON:
			return action.personId;
		default: return state;
	}
};