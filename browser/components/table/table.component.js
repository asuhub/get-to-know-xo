import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/actions.component';
import Modal from 'react-modal';
import ModalStyles from './table.modal';
import './table.scss';

class Table extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { people, modalOpen } = this.props;
    const noPeople = people.length < 1;
    return (
      <div className="tab-wrapper z-depth-3">
        <table>
            <colgroup>
              <col />
              <col />
              <col />
              <col className="skinny" />
            </colgroup>
          <thead>
            <tr>
              <th data-field="id">Id</th>
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
            <div>{this.props.editingPerson}</div>
            <button>Close</button>
            <button>Save</button>
          </Modal>
      </div>
    );
  }
}

/* ---------  CONTAINER   ------- */
const mapStateToProps = ( {people, modalOpen, editingPerson } ) => {
  return {
    people,
    modalOpen,
    editingPerson
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);

