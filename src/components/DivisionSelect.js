import React from 'react';
import Selectbox from './Selectbox';

const sortBy = [
  { value: 'WEST', label: 'Western' },
  { value: 'CENT', label: 'Central' },
  { value: 'EAST', label: 'Eastern' },
]

const DivisionSelect = (props) => {
    return (
      <div>
        Order by <Selectbox options={sortBy} handleOnChange={props.onDivisionSelect} />
      </div>
    );
}

export default DivisionSelect;