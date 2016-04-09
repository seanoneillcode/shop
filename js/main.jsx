'use strict'

import Form from './form.jsx';
import React from 'react';
import ReactDom from 'react-dom';
import itemData from '../data/products-data.json';
import itemSchema from '../data/products-schema.json';

class App extends React.Component {

  printState() {
    console.log("data ", this.refs.jsonForm.getData());
  }

  render() {
    const form = <Form ref="jsonForm" data={itemData} schema={itemSchema} />;
    return <div>{form}
      <div>
        <button type="button" onClick={
          () => {
            this.printState();
          }
        }>Save</button>
      </div>
    </div>;
  }
}

ReactDom.render(<App/>, document.getElementById('container'));
