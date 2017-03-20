import React from 'react';
import { connect } from 'react-redux';
import { toggleEditPerson, personToEdit, deleteUserFromDb } from '../table/table.reducer';
import './actions.scss';

class Actions extends React.Component {
  constructor(props){
    super(props);
    this.deletePerson = this.deletePerson.bind(this);
    this.openModal = this.openModal.bind(this);
    this.setEditingPerson = this.setEditingPerson.bind(this);
  }

  deletePerson() {
    this.props.deletePerson(this.props.person.id);
  }

  openModal(bool) {
    this.props.openModal(bool);
  }

  setEditingPerson(personId) {
    this.props.editingPerson(personId);
  }

  render() {
    const { person } = this.props;
    return (
      <div>
        <i className="material-icons small edit spacer" onClick={() => { this.openModal(true); this.setEditingPerson(person.id)}}>mode_edit</i>
        <i className="material-icons small delete spacer" onClick={this.deletePerson}>delete</i>
      </div>
    );
  }
}

/* ---------  CONTAINER   ------- */
const mapStateToProps = ( ) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (bool) => {
      dispatch( toggleEditPerson(bool) );
    },
    editingPerson: (personId) => {
      dispatch( personToEdit(personId) );
    },
    deletePerson: (personId) => {
      dispatch( deleteUserFromDb(personId) );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Actions);

