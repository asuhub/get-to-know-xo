import React from 'react';
import Actions from '../actions/actions.component';
import Modal from 'react-modal';
import ModalStyles from './table.modal';
import EditForm from '../edit-form/edit-form.component';
import './table.scss';

const Table = ( {people, modalOpen }) => {
    const noPeople = people.length < 1;
    return (
      <div className="tab-wrapper z-depth-3 margin-top">
        <table>
            <colgroup>
              <col />
              <col />
              <col />
              <col className="skinny" />
            </colgroup>
          <thead>
            <tr>
              <th data-field="id">ID</th>
              <th data-field="name">Name</th>
              <th data-field="favorite-city">Favorite City</th>
              <th data-field="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            { noPeople ? <tr><td>No people records found</td></tr> : people && people.map( person => (
              <tr key={`person -${person.id}`}>
                <td className="test">{person.id}</td>
                <td>{person.name}</td>
                <td>{person.favoriteCity}</td>
                <td><Actions person={person} /></td>
              </tr>
            ))}
          </tbody>
        </table>
          <Modal
            isOpen={modalOpen}
            style={ModalStyles}
            contentLabel="Modal"
          >
            <h4>Edit Person</h4>
            <EditForm />
          </Modal>
      </div>
    );
};

export default Table;


