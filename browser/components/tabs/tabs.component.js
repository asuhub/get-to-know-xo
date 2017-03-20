import React from 'react';
import { connect } from 'react-redux';
import Table from '../table/table.component';
import AddNew from '../add-new/add-new.component';
import ViewById from '../view-by-id/view-by-id.component';
import './shared.scss';
import './tabs.scss';

class Tabs extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { modalOpen, people, editingPerson} = this.props;
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <ul className="tabs margin-bottom">
              <li className="tab col s4"><a className="active" href="#view-all">View All</a></li>
              <li className="tab col s4"><a  href="#by-id">View By Id</a></li>
              <li className="tab col s4"><a href="#add-new">Add New</a></li>
            </ul>
          </div>
          <div id="view-all" className="col s12">
            <Table people={people} modalOpen={modalOpen} editingPerson={editingPerson} />
          </div>
          <div id="by-id" className="col s12">
            <ViewById />
          </div>
          <div id="add-new" className="col s12">
            <AddNew />
          </div>
        </div>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);

