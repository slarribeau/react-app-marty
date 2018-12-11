import React, { Component } from 'react';
import Select from 'react-select'

const colourStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'grey',
    backgroundColor: 'black',
    padding: 10,
  }),
  control: base => ({
    ...base,
    background: "black"
  }),
  singleValue: base => ({
    ...base,
    color: "grey"
  }),
  input: base => ({
    ...base,
    color: 'black'
  })
};

class Selectbox extends Component {

  onChange = (e) => {
    this.props.handleOnChange(e.value);
  }

  render() {
    return (
        <Select 
          onChange={ (e) => this.onChange(e) }
          defaultValue={this.props.options[0]}
          options={this.props.options}
          styles={colourStyles}
        />   
    );
  }
}

export default Selectbox;