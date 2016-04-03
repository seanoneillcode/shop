'use strict'

import Item from './item.jsx';
import React from 'react';
import ReactDom from 'react-dom';
import itemData from '../data/products-data.json';
import itemSchema from '../data/products-schema.json';

class App extends React.Component {

  printState(item) {
    console.log("STATE ", item.state);
  }

  render() {
    const item = <Item data={itemData} schema={itemSchema} />;
    return <div>{item}
      <div>
        <button type="button" onClick={() => {
            console.log("click ", this, item);
            this.printState(item);
          }}>Save</button>
      </div>
    </div>;
  }
}

ReactDom.render(<App/>, document.getElementById('container'));
