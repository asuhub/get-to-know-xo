import axios from 'axios';
import { addUser } from '../table/table.reducer';


/* -----------------    ACTIONS     ------------------ */
export const JUST_ADDED_USER = 'JUST_ADDED_USER';
export const ADDED_FOUND_USER = 'ADDED_FOUND_USER';

/* -----------------    ACTION CREATORS     ------------------ */
export const setJustAddedPerson = personId => {
  return {
    type: JUST_ADDED_USER,
    personId
  };
};

export const addedFoundUser = user => {
  return {
    type: ADDED_FOUND_USER,
    user
  };
};


/* ------------       ASYNC ACTIONS     ------------------ */
export const postNewPerson = details => {
  return dispatch => {
    axios.post(`/api/people`, details)
      .then(res => {
        dispatch( addUser(res.data));
        dispatch( setJustAddedPerson(res.data.id));
      })
      .catch(err => console.log(err));
  };
};

export const findPersonById = personId => {
  return dispatch => {
    axios.get(`/api/people/${personId}`)
      .then(res => dispatch( addedFoundUser(res.data) ))
      .catch(err => console.log(err));
  };
};

/* ------------      REDUCER     ------------------ */

export const justAddedPerson = (state = null, action) => {
	switch (action.type) {
		case JUST_ADDED_USER:
			return action.personId;
		default: return state;
	}
};

export const foundUserAdded = (state = {}, action) => {
	switch (action.type) {
		case ADDED_FOUND_USER:
			return action.user;
		default: return state;
	}
};
