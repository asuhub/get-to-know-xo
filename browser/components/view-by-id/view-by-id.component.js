import React from 'react';
import { connect } from 'react-redux';
import { findUserById, toggleUserNotFoundError, foundUserView  } from '../view-by-id/view-by-id.reducer';
import Table from '../table/table.component';
import { toggleEditPerson } from '../table/table.reducer';


class ViewById extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
    };
    this.setId = this.setId.bind(this);
    this.findUser = this.findUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    this.props.clearUser({});
  }

  componentDidUpdate(){
    const self = this;
    if (this.props.userNotFound) {
      setTimeout( () =>  {
        self.props.toggleUserNotFound(false);
      }, 5000);
    }
  }

  setId(evt) {
    evt.preventDefault();
    this.setState({id: evt.target.value});
  }

  findUser(evt) {
    evt.preventDefault();
    const userId = this.state.id;
    this.props.fetchUser(userId);
  }

  closeModal() {
    this.props.closeModal(false);
  }

  render() {
    const { userNotFound, foundUser, modalOpen } = this.props;
    return (
    <div>
      <div className="tab-wrapper z-depth-3">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="col s12">
                <div className="input-field col s6 inline">
                  <input onChange={this.setId} id="id" type="text" className="validate" />
                  <label htmlFor="id">Person's ID</label>
                </div>
              </div>
            </div>
            <button type="submit" className="waves-effect waves-light btn" onClick={this.findUser}>Find by Id</button>
          </form>
        </div>
      { userNotFound ? <div className="error-text">That ID was not found. Please try another ID.</div> : ''}
     </div>
    { foundUser.id ? <Table people={[foundUser]} modalOpen={modalOpen} closeModal={this.closeModal} /> : ''}
    </div>
    );
  }
}

/* ---------  CONTAINER   ------- */
const mapStateToProps = ({ userNotFound, foundUser, modalOpen }) => {
  return {
    userNotFound,
    foundUser,
    modalOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => {
      dispatch( findUserById(userId) );
    },
    toggleUserNotFound: boolean => {
      dispatch( toggleUserNotFoundError(boolean) );
    },
    closeModal: boolean => {
      dispatch( toggleEditPerson(boolean));
    },
    clearUser: clearedUser => {
      dispatch( foundUserView(clearedUser));
    }
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewById);


