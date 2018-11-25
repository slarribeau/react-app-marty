import React from 'react';
import Selectbox from './Selectbox';

const sortBy = [
  { value: 'WEST', label: 'Western' },
  { value: 'CENT', label: 'Central' },
  { value: 'EAST', label: 'Eastern' },
]

const DivisionSelect = (props) => {
    return (
      <span>
            <Selectbox options={sortBy} handleOnChange={props.onDivisionSelect} />
      </span>
    );
}

export default DivisionSelect;