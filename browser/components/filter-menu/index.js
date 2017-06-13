import React from 'react';
import { connect } from 'react-redux';
import { toggleEditPerson, updatePersonInDb } from '../table/table.reducer';
import styles from './filter-menu.scss';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.editingPerson.name,
      favoriteCity: this.props.editingPerson.favoriteCity,
      blankEntryError: false
    };
  }

  render() {
    return (
      <div className={styles['filter-container']}>
        <div className={styles['filter-heading']}>Filter by</div>
        <hr />
        <form action="/action_page.php">
          <div className={styles['filter-section']}>
            <div className={styles[`filter-opt`]}>Department</div>
            <input type="checkbox" name="vehicle" value="Bike" /> Techonology<br />
            <input type="checkbox" name="vehicle" value="Car" /> Editorial<br />
            <input type="checkbox" name="vehicle" value="Bike" /> Customer Service<br />
            <input type="checkbox" name="vehicle" value="Car" /> Marketing<br />
            <input type="checkbox" name="vehicle" value="Car" /> HR<br />
          </div>
          <div className={styles['filter-section']}>
            <div className={styles[`filter-opt`]}>Floor</div>
            <input type="checkbox" name="vehicle" value="Bike" /> 24<br />
            <input type="checkbox" name="vehicle" value="Car" /> 25<br />
          </div>
          <div className={styles['filter-section']}>
            <div className={styles[`filter-opt`]}>Tenure</div>
            <input type="checkbox" name="vehicle" value="Bike" /> Less than a year<br />
            <input type="checkbox" name="vehicle" value="Car" /> 1 year<br />
            <input type="checkbox" name="vehicle" value="Car" /> 2 years<br />
            <input type="checkbox" name="vehicle" value="Car" /> 3 years<br />
            <input type="checkbox" name="vehicle" value="Car" /> 4 years<br />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ modalOpen, editingPerson }) => {
  return {
    modalOpen,
    editingPerson
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: bool => {
      dispatch(toggleEditPerson(bool));
    },
    updatePerson: (id, details) => {
      dispatch(updatePersonInDb(id, details));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterMenu);

