import React from 'react';
import { connect } from 'react-redux';
import { postNewPerson, findPersonById } from './add-new.reducer.js';
import { toggleEditPerson } from '../table/table.reducer';
import Table from '../table/table.component';
import './add-new.scss';

class AddNew extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      favoriteCity: '',
      blankEntryError: false,
      successMessage: false
    };
    this.addNewPerson = this.addNewPerson.bind(this);
    this.setName = this.setName.bind(this);
    this.setFavoriteCity = this.setFavoriteCity.bind(this);
    this.findUser = this.findUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setSuccessMessage = this.setSuccessMessage.bind(this);
  }

  componentDidUpdate() {
    if (this.props.justAddedPerson !== null && this.state.successMessage !== true) {
      this.setSuccessMessage(true);
    }
  }

  setSuccessMessage(bool) {
    this.setState({successMessage: bool});
  }

  setName(evt) {
    evt.preventDefault();
    this.setState({name: evt.target.value});
  }

  setFavoriteCity(evt) {
    evt.preventDefault();
    this.setState({favoriteCity: evt.target.value});
  }

  closeModal() {
    this.props.closeModal(false);
  }

  findUser() {
    const personId = this.props.justAddedPerson;
    this.props.fetchPerson(personId);
  }

  addNewPerson(evt) {
    evt.preventDefault();
    const self = this;
    if (this.state.name === '' || this.state.favoriteCity === '') {
      this.setState({blankEntryError: true});
      setTimeout( () =>  {
        self.setState({blankEntryError: false});
      }, 3000);
    } else {
      const details = {
        name: this.state.name,
        favoriteCity: this.state.favoriteCity
      };
      this.props.postNewPerson(details);
    }
  }

  render() {
    const { justAddedPerson, foundUserAdded, modalOpen } = this.props;
    return (
    <div>
      <div className="tab-wrapper z-depth-3">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input onChange={this.setName} id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">Name</label>
              </div>
              <div className="input-field col s6">
                <input onChange={this.setFavoriteCity} id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Favorite City</label>
              </div>
            </div>
            { this.state.blankEntryError ? <div className="error-text">Oops! Fields cannot be empty.</div> : ''}
            { this.state.successMessage ? <div onClick={this.findUser} className="success-text pointer">{`Person successfully added and has an ID of ${justAddedPerson}. Click here to view record.`}</div> : ''}
            <button type="submit" className="waves-effect waves-light btn" onClick={this.addNewPerson}>Add Person</button>
          </form>
          </div>
        </div>
        { foundUserAdded.id ? <Table people={[foundUserAdded]} modalOpen={modalOpen} closeModal={this.closeModal} /> : ''}
      </div>
    );
  }
}

/* ---------  CONTAINER   ------- */
const mapStateToProps = ( { justAddedPerson, foundUserAdded, modalOpen} ) => {
  return {
    justAddedPerson,
    foundUserAdded,
    modalOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postNewPerson: details => {
      dispatch( postNewPerson(details) );
    },
    fetchPerson: userId => {
      dispatch( findPersonById(userId) );
    },
    closeModal: boolean => {
      dispatch( toggleEditPerson(boolean));
    }
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNew);
