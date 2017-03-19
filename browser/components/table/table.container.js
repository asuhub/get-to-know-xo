import { connect } from 'react-redux';
import Table from './table.component';

const mapStateToProps = ( {people, showNoPeopleError} ) => {
  return {
    people,
    showNoPeopleError
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
