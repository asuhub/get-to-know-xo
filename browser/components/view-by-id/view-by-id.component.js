import React from 'react';
import { connect } from 'react-redux';
import { findUserById, toggleUserNotFoundError  } from '../view-by-id/view-by-id.reducer';
import Table from '../table/table.container';

class ViewById extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
    };
    this.setId = this.setId.bind(this);
    this.findUser = this.findUser.bind(this);
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

  findUser() {
    const userId = this.state.id;
    this.props.fetchUser(userId);
  }

  render() {
    const { userNotFound, foundUser } = this.props;
    return (
      <div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="col s12">
                Enter a Person's Id:
                <div className="input-field inline">
                  <input onChange={this.setId} id="id" type="text" className="validate" />
                  <label htmlFor="id">Id</label>
                </div>
              </div>
            </div>
          </form>
          </div>
          <div className="waves-effect waves-light btn" onClick={this.findUser}>Find by Id</div>
          { userNotFound ? <div>That Id was not found. Please try another id.</div> : ''}
          { foundUser.id ? <Table /> : ''}
        </div>
    );
  }
}

/* ---------  CONTAINER   ------- */
const mapStateToProps = ({ userNotFound, foundUser }) => {
  return {
    userNotFound,
    foundUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => {
      dispatch( findUserById(userId) );
    },
    toggleUserNotFound: boolean => {
      dispatch( toggleUserNotFoundError(boolean) );
    }
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewById);


