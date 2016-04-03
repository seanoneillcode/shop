'use strict'

import React from 'react';
import StringType from './stringType.jsx';
import NumberType from './numberType.jsx';
import ObjectType from './objectType.jsx';

class ArrayType extends React.Component {

  handleChange(event) {
    this.props.onChange(this.props.property, event.target.value);
  }

  decide(schema, property, value) {
    console.log("array decide, ", schema, property, value);
    const type = schema["type"];
    if (type === "array") {
      return <ArrayType schema={schema} property={property} value={value}/>
    }
    if (type === "object") {
      return <ObjectType schema={schema} property={property} value={value}/>
    }
    if (type === "string" || type === "number") {
      return <StringType schema={schema} property={property} value={value} onChange={(item) => {
          const value = [];
          value[item.property] = item.value;
          this.props.onChange({property: this.props.property, value: value});
        }}/>;
    }
    if (type === "number") {
      return <NumberType schema={schema} property={property} value={value}/>
    }
    return;
  }

  render() {
    console.log("arrayRender, ", this);
    let items = [];
    const list = this.props.value[this.props.property];
    const schema = this.props.schema["items"];
    if (list) {
      let counter = 0;
      for (let item of list) {
        items.push(<div style={{marginLeft: "40px"}} key={counter}>{this.decide(schema, counter, item)}</div>);
        counter++;
      }
    }
    return <div>{this.props.property} {items}</div>;
  }
}

export default ArrayType;
