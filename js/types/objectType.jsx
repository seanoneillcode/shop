'use strict'

import React from 'react';
import StringType from './stringType.jsx';
import NumberType from './numberType.jsx';
import ArrayType from './arrayType.jsx';

class ObjectType extends React.Component {

  decide(schema, property, value) {
    const type = schema["type"];
    if (type === "array") {
      return <ArrayType schema={schema} property={property} value={value} onChange={(item) => {
        const value = {}
        value[item.property] = item.value;
        this.props.onChange({property: this.props.property, value: value});
        }}/>;
    }
    if (type === "object") {
      return <ObjectType schema={schema} property={property} value={value} onChange={(item) => {
        const value = {}
        value[item.property] = item.value;
        this.props.onChange({property: this.props.property, value: value});
        }}/>;
    }
    if (type === "string") {
      return <StringType schema={schema} property={property} value={value} onChange={(item) => {
          const value = {}
          value[item.property] = item.value;
          this.props.onChange({property: this.props.property, value: value});
        }}/>;
    }
    if (type === "number") {
      return <NumberType schema={schema} property={property} value={value} onChange={(item) => {
          const value = {}
          value[item.property] = item.value;
          this.props.onChange({property: this.props.property, value: value});
        }}/>;
    }
    return;
  }

  render() {
    const properties = this.props.schema["properties"];
    const value = this.props.value;
    const list = [];
    for (let key in properties) {
      list.push(<div style={{marginLeft: "40px"}} key={key}>{this.decide(properties[key], key, value[this.props.property])}</div>);
    }
    return <div>{this.props.property} {list}</div>;
  }
}

export default ObjectType;
