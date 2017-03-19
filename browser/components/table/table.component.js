import React from 'react';
import { connect } from 'react-redux';
import EditDeleteButtons from '../edit-delete-buttons/edit-delete-buttons.component.js';
import {  deleteUserFromDb } from './table.reducer';

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: []
    };
    this.setEditing = this.setEditing.bind(this);
  }

  //function to set the state to the id that is being edited
  setEditing(id) {
    this.setState({editing: this.state.editing.concat([id])});
  }


  render(){
    const { people  } = this.props;
    const noPeople = people.length < 1;
    return (
      <div>
        <table>
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
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.favoriteCity}</td>
                <td><EditDeleteButtons id={person.id} /></td>
              </tr>
            ))}
          </tbody>
        </table>
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
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);

