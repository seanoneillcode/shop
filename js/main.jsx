'use strict'

import Item from './item.jsx';
import React from 'react';
import ReactDom from 'react-dom';
import itemData from '../data/products-data.json';
import itemSchema from '../data/products-schema.json';

class App extends React.Component {

  printState(item) {
    console.log("data ", this.refs.itemForm.getData());
  }

  render() {
    const item = <Item ref="itemForm" data={itemData} schema={itemSchema} />;
    return <div>{item}
      <div>
        <button type="button" onClick={
          () => {
            this.printState(item.type);
          }
        }>Save</button>
      </div>
    </div>;
  }
}

ReactDom.render(<App/>, document.getElementById('container'));
