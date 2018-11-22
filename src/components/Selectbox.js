import React, { Component } from 'react';

class Selectbox extends Component {

  createOptions = (options) => options.map( o => <option value={o.value} key={o.value}>{o.label}</option> );

  onChange = (e) => {
    this.props.handleOnChange(e.target.value);
  }

  render() {

    return (
      <select onChange={ (e) => this.onChange(e) }>
        {this.createOptions(this.props.options)}
      </select>
    );
  }
}

export default Selectbox;