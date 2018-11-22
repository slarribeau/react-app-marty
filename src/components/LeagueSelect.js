import React, { Component } from 'react';
import Selectbox from './Selectbox';

const sortBy = [
  { value: 'AL', label: 'American League' },
  { value: 'NL', label: 'National League' },
]

class LeagueSelect extends Component {

  handleSort = (value) => {
    console.log(value)
    //this.props.updateSort(value);
  }

  render() {
    return (
      <div className="sort">
        Order by <Selectbox options={sortBy} handleOnChange={this.handleSort} />
      </div>
    );
  }
}

export default LeagueSelect;