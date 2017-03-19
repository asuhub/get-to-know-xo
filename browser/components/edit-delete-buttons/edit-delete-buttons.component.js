import React from 'react';
import { connect } from 'react-redux';
import {  deleteUserFromDb } from '../table/table.reducer';

class EditDeleteButtons extends React.Component {
  constructor(props){
    super(props);
    this.deletePerson = this.deletePerson.bind(this);
  }

  deletePerson() {
    this.props.deletePerson(this.props.id);
  }

  render() {

    return (
      <div>
        <i className="material-icons small" onClick={this.deletePerson}>delete</i>
        <i className="material-icons small">mode_edit</i>
      </div>
    );
  }
}

/* ---------  CONTAINER   ------- */
const mapStateToProps = ( {people} ) => {
  return {
    people
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePerson: id => {
      dispatch( deleteUserFromDb(id) );
    }
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDeleteButtons);

