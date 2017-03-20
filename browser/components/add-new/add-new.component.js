import React from 'react';
import { connect } from 'react-redux';
import { postNewPerson} from './add-new.reducer.js';
import './add-new.scss';

class AddNew extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      favoriteCity: '',
      blankEntryError: false
    };
    this.addNewPerson = this.addNewPerson.bind(this);
    this.setName = this.setName.bind(this);
    this.setFavoriteCity = this.setFavoriteCity.bind(this);
  }

  setName(evt) {
    evt.preventDefault();
    this.setState({name: evt.target.value});
  }

  setFavoriteCity(evt) {
    evt.preventDefault();
    this.setState({favoriteCity: evt.target.value});
  }

  addNewPerson() {
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
    return (
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
          </form>
          </div>
          { this.state.blankEntryError ? <div className="error-text">Oops! Fields cannot be empty.</div> : ''}
          <div className="waves-effect waves-light btn" onClick={this.addNewPerson}>Add Person</div>
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
    postNewPerson: details => {
      dispatch( postNewPerson(details) );
    }
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNew);
