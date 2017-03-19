import React from 'react';
import { connect } from 'react-redux';

class EditDeleteButtons extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      favoriteCity: '',
    };
  }


  render() {
    return (
      <div>
        <i className="material-icons small">delete</i>
        <i className="material-icons small">mode_edit</i>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDeleteButtons);
