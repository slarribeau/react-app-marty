import React, { Component } from 'react';
import Selectbox from './Selectbox';

const sortBy = [
  { value: 'AL', label: 'American League' },
  { value: 'NL', label: 'National League' },
]

//class LeagueSelect extends Component {
const LeagueSelect = (props) => {
    console.log("scott")
    console.log(props)
    console.log("robert")
    //props.onLeagueSelect();
    return (
      <div className="sort">
        Order by <Selectbox options={sortBy} handleOnChange={props.onLeagueSelect} />
      </div>
    );
}

export default LeagueSelect;