import axios from 'axios';
import { addUser } from '../table/table.reducer';

/* -----------------    ACTIONS     ------------------ */
export const TOGGLE_USER_NOT_FOUND = 'TOGGLE_USER_NOT_FOUND';

/* -----------------    ACTION CREATORS     ------------------ */
export const toggleUserNotFoundError = boolean => {
  return {
    type: TOGGLE_USER_NOT_FOUND,
    boolean
  };
};

/* ------------       ASYNC ACTIONS     ------------------ */
export const findUserById = userId => {
  return dispatch => {
    axios.get(`/api/people/${userId}`)
      .then(res => {
        if (res.status === 204) {
          dispatch( toggleUserNotFoundError(true) );
        } else {
          dispatch( addUser(res.data) );
        }
      })
      .catch(err => console.log(err));
  };
};

/* ------------       REDUCER    ------------------ */
export const userNotFound = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_USER_NOT_FOUND:
			return action.boolean;
		default: return state;
	}
};


