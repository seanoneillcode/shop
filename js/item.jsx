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
    const schema = this.props.schema;
    const rootObject = {root: this.state.data};
    const renderableSchema = <ObjectType schema={schema} property="root" value={this.state.data} onChange={
        (item) => {
          const merged = _.merge({}, this.state.data, {root:item.value});
          this.setState({data:merged});
        }
      }/>;
    return <div>schema:{renderableSchema}</div>
  }
}

export default Item;
