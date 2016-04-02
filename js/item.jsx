'use strict'

import React from 'react';

class Item extends React.Component {

  outputSchemaLevel(schema) {
    for (let key in schema) {
      console.log("key " + key + " value " + schema[key]);
    }
  }

  handleString(schema) {
    console.log("handleString, ", schema);
    return "string";
  }

  handleNumber(schema) {
    console.log("handleNumber, ", schema);
    return "number";
  }

  handleArray(schema) {
    console.log("handleArray, ", schema);
    return <div style={{marginLeft: "40px"}}>Array -> {this.decide(schema["items"])}</div>;
  }

  handleObject(schema) {
    console.log("handleObject, ", schema);
    const props = schema["properties"];
    const list = [];
    for (let key in props) {
      list.push(<div style={{marginLeft: "40px"}} key={key}>{key} : {this.decide(props[key])}</div>);
    }
    return <div style={{marginLeft: "40px"}}>Object -> {list}</div>;
  }

  decide(item) {
    console.log("decide, ", item);
    const type = item["type"];
    if (type === "array") {
      return this.handleArray(item);
    }
    if (type === "object") {
      return this.handleObject(item);
    }
    if (type === "string") {
      return this.handleString(item);
    }
    if (type === "number") {
      return this.handleNumber(item);
    }
    return;
  }

  render() {
    const schema = this.props.schema;
    const renderableSchema = this.decide(schema);
    return <div>id: {this.props.data.id}, name: {this.props.data.name}, price: {this.props.data.price}, schema:{renderableSchema}</div>
  }
}

export default Item;
