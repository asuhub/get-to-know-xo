import React from 'react';
import EditDeleteButtons from '../edit-delete-buttons/edit-delete-buttons.component.js';

class Table extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
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
                <td><EditDeleteButtons /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
