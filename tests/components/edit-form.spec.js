import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import { PureEditForm } from '../../browser/components/edit-form/edit-form.component';
import 'ignore-styles';
import register from 'ignore-styles';
register(['.sass', '.scss']);

describe( '<AddNew />', () => {
  let pureEditWrapper;
  beforeEach( () => {
    pureEditWrapper = shallow( <PureEditForm
      editingPerson = { { id: 1, name: 'phil', favoriteCity: 'New York'} }
      modalOpen = { false }
     /> );
  });

  it('has an initial local state of {name: "phil", favoriteCity: "New York", blankEntryError: false}', () => {
    expect(pureEditWrapper.state()).to.be.deep.equal({
      name: 'phil',
      favoriteCity: 'New York',
      blankEntryError: false,
    });
  });
});
