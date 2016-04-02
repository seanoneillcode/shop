'use strict'

import React from 'react';

class StringType extends React.Component {

  constructor(props) {
    super(props);
    console.log("cons ", this);
    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({value: event.target.value});
  }

  render() {
    console.log("handleString, ", this.props);
    return <span>
      <lable>{this.props.property}</lable>
      <input value={this.state.value} onChange={this.handleChange}/>
      </span>;
  }
}

export default StringType;
