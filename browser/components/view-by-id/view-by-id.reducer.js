import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
export const TOGGLE_USER_NOT_FOUND = 'TOGGLE_USER_NOT_FOUND';
export const ADD_FOUND_USER = 'ADD_FOUND_USER';

/* -----------------    ACTION CREATORS     ------------------ */
export const toggleUserNotFoundError = boolean => {
  return {
    type: TOGGLE_USER_NOT_FOUND,
    boolean
  };
};

export const addFoundUser = user => {
  return {
    type: ADD_FOUND_USER,
    user
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
          dispatch( addFoundUser(res.data) );
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

export const foundUser = (state = {}, action) => {
	switch (action.type) {
		case ADD_FOUND_USER:
			return action.user;
		default: return state;
	}
};


