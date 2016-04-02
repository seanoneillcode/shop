'use strict'

import React from 'react';
import StringType from './types/stringType.jsx';

class Item extends React.Component {

  outputSchemaLevel(schema) {
    for (let key in schema) {
      console.log("key " + key + " value " + schema[key]);
    }
  }

  handleString(schema, property, value) {
    return <StringType schema={schema} property={property} value={value}/>;
  }

  handleArray(schema, property, values) {
    // console.log("handleArray, ", schema);
    let items = [];
    if (values) {
      let counter = 0;
      for (let value of values) {
        items.push(<div style={{marginLeft: "40px"}} key={counter}>{this.decide(schema["items"], "item", value)}</div>);
        counter++;
      }
    }
    return <div>{property} {items}</div>; //{this.decide(schema["items"])}
  }

  handleObject(schema, property, values) {
    console.log("handleObject, ", schema, property, values);
    const props = schema["properties"];
    const list = [];
    for (let key in props) {
      list.push(<div style={{marginLeft: "40px"}} key={key}>{this.decide(props[key], key, values)}</div>);
    }
    return <div>{property} {list}</div>;
  }

  decide(item, property, data) {
    console.log("decide, ", item, property, data);
    const type = item["type"];
    if (type === "array") {
      return this.handleArray(item, property, data[property]);
    }
    if (type === "object") {
      return this.handleObject(item, property, data[property]);
    }
    if (type === "string") {
      let stringValue = data[property];
      if ("string" == typeof data) {
        console.log("data ", data);
        stringValue = data;
      } else {
        console.log("data[property] ", stringValue);
      }
      return this.handleString(item, property, stringValue);
    }
    if (type === "number") {
      return this.handleString(item, property, data[property]);
    }
    return;
  }

  render() {
    const schema = this.props.schema;
    const renderableSchema = this.decide(schema, "root", {root:this.props.data});
    return <div>id: {this.props.data.id}, name: {this.props.data.name}, price: {this.props.data.price}, schema:{renderableSchema}</div>
  }
}

export default Item;
