import axios from 'axios';
import { addUser } from '../table/table.reducer';

/* ------------       ASYNC ACTIONS     ------------------ */
export const postNewPerson = details => {
  return dispatch => {
    axios.post(`/api/people`, details)
      .then(res => dispatch( addUser(res.data) ))
      .catch(err => console.log(err));
  };
};

