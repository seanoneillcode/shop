'use strict'

import React from 'react';
import _ from 'lodash';
import StringType from './types/stringType.jsx';
import ObjectType from './types/objectType.jsx';
import ArrayType from './types/arrayType.jsx';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data : {
        root: this.props.data
      }
    };
  }

  render() {
    const schemaType = <ObjectType
      schema = {this.props.schema}
      property = "root"
      value = {this.state.data}
      onChange = {
        (item) => {
          const merged = _.merge({}, this.state.data, {root:item.value});
          this.setState({data:merged});
        }
      }/>;
    return <div>{schemaType}</div>
  }
}

export default Item;
