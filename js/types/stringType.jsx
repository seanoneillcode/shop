'use strict'

import React from 'react';

class StringType extends React.Component {

  handleChange(event) {
    this.props.onChange({property : this.props.property, value: event.target.value});
  }

  render() {
    const stringValue = typeof this.props.value == "string" ? this.props.value : this.props.value[this.props.property];
    return <span>
      <lable>{this.props.property}</lable>
      <input value={stringValue} onChange={this.handleChange.bind(this)}/>
      </span>;
  }
}

export default StringType;
