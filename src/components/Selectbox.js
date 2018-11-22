import React, { Component } from 'react';

class Selectbox extends Component {

  state = {
    selected: '',
  }

  createOptions = (options) => options.map( o => <option value={o.value} key={o.value}>{o.label}</option> );

  onChange = (e) => {
    this.props.handleOnChange(e.target.value);
  }

  render() {
    const { classes, options } = this.props;
    console.log("lisa");
    console.log(this.props)
    console.log("renee");


    return (
      <select onChange={ (e) => this.onChange(e) } className={classes}>
        {this.createOptions(options)}
      </select>
    );
  }
}
/*
Selectbox.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
};
*/
export default Selectbox;