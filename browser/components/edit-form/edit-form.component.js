import React from 'react';
import { connect } from 'react-redux';
import { toggleEditPerson, updatePersonInDb } from '../table/table.reducer';

class EditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.editingPerson.name,
      favoriteCity: this.props.editingPerson.favoriteCity,
      blankEntryError: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.setName = this.setName.bind(this);
    this.setFavoriteCity = this.setFavoriteCity.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
  }

  closeModal() {
    this.props.closeModal(false);
  }

  setFavoriteCity(evt) {
    evt.preventDefault();
    this.setState({ favoriteCity: evt.target.value});
  }

  setName(evt) {
    evt.preventDefault();
    this.setState({ name: evt.target.value});
  }

  updatePerson() {
    const self = this;
    if (this.state.name === '' || this.state.favoriteCity === '') {
      this.setState({blankEntryError: true});
      setTimeout( () =>  {
        self.setState({blankEntryError: false});
      }, 3000);
    } else {
       const id = this.props.editingPerson.id;
       const details = {
         name: this.state.name,
         favoriteCity: this.state.favoriteCity
       };
       this.props.updatePerson(id, details);
       this.closeModal();
    }
  }

  render() {
    return (
      <div className="tab-wrapper">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" onChange={this.setName} type="text" className="validate" value={this.state.name} />
                <label htmlFor="first_name" className={this.state.name ? 'active' : ''}>Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" onChange={this.setFavoriteCity} type="text" className="validate" value={this.state.favoriteCity} />
                <label htmlFor="last_name" className={this.state.favoriteCity ? 'active' : ''}>Favorite City</label>
              </div>
            </div>
          </form>
          </div>
          { this.state.blankEntryError ? <div className="error-text">Oops! An update cannot be blank.</div> : ''}
          <div className="waves-effect waves-light btn" onClick={this.updatePerson}>Save</div>
          <div className="waves-effect waves-light btn" onClick={this.closeModal}>Close</div>
        </div>
    );
  }
}

const mapStateToProps = ( {  modalOpen, editingPerson } ) => {
  return {
    modalOpen,
    editingPerson
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: bool => {
      dispatch( toggleEditPerson(bool) );
    },
    updatePerson: (id, details) => {
      dispatch( updatePersonInDb(id, details) );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);

export { EditForm as PureEditForm};

