import React from 'react';
import Table from '../table/table.container';
import AddNew from '../add-new/add-new.component';
import ViewById from '../view-by-id/view-by-id.component';

class Tabs extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3"><a className="active" href="#view-all">View All</a></li>
              <li className="tab col s3"><a  href="#by-id">View By Id</a></li>
              <li className="tab col s3"><a href="#add-new">Add New</a></li>
            </ul>
          </div>
          <div id="view-all" className="col s12">
            <Table />
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

export default Tabs;