import React, { Component } from 'react';
import Select from 'react-select'

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
        />   
    );
  }
}

export default Selectbox;