import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import { PureAddNew } from '../../browser/components/add-new/add-new.component';
import Table from '../../browser/components/table/table.component';
import 'ignore-styles';
import register from 'ignore-styles';
register(['.sass', '.scss']);

describe( '<AddNew />', () => {
  let addNewWrapper;
  beforeEach( () => {
    addNewWrapper = shallow( <PureAddNew
      justAddedPerson = { null }
      foundUserAdded = { { id: 1, name: 'phil', favoriteCity: 'New York'} }
      modalOpen = { false }
     /> );
  });

  it('uses <Table /> when the foundUser is truthy', () => {
    expect(addNewWrapper.find(Table).length).to.be.equal(1);
  });

  it('has an initial local state of {name: "", favoriteCity: "", blankEntryError: false, successMessage: false}', () => {
    expect(addNewWrapper.state()).to.be.deep.equal({
      name: '',
      favoriteCity: '',
      blankEntryError: false,
      successMessage: false
    });
  });
});
