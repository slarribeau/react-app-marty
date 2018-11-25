import React from 'react';
import Selectbox from './Selectbox';

const sortBy = [
  { value: 'AL', label: 'American League' },
  { value: 'NL', label: 'National League' },
]

const LeagueSelect = (props) => {
    return (
      <span>
        <Selectbox options={sortBy} handleOnChange={props.onLeagueSelect} />
      </span>
    );
}

export default LeagueSelect;