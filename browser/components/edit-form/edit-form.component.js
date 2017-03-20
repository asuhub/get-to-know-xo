import React from 'react';
import { connect } from 'react-redux';
import { toggleEditPerson } from '../table/table.reducer';

class EditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.editingPerson.name,
      favoriteCity: this.props.editingPerson.favoriteCity
    };
    this.closeModal = this.closeModal.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateFavoriteCity = this.updateFavoriteCity.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
  }

  closeModal() {
    this.props.closeModal(false);
  }

  updateFavoriteCity(evt) {
    evt.preventDefault();
    this.setState({ favoriteCity: evt.target.value});
  }

  updateName(evt) {
    evt.preventDefault();
    this.setState({ name: evt.target.value});
  }

  updatePerson() {
    
    this.setState({ name: evt.target.value});
  }

  render() {
    return (
      <div className="tab-wrapper">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" value={this.state.name} />
                <label htmlFor="first_name" className={this.state.name ? 'active' : ''}>Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" value={this.state.favoriteCity} />
                <label htmlFor="last_name" className={this.state.favoriteCity ? 'active' : ''}>Favorite City</label>
              </div>
            </div>
          </form>
          </div>
          <div className="waves-effect waves-light btn" onClick={this.closeModal}>Save</div>
          <div className="waves-effect waves-light btn" onClick={this.closeModal}>Close</div>
        </div>
    );
  }
}

const mapStateToProps = ( { people, modalOpen, editingPerson } ) => {
  return {
    people,
    modalOpen,
    editingPerson
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: bool => {
      dispatch( toggleEditPerson(bool) );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);

