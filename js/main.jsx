import Hello from './hello.jsx';
import World from './world.jsx';
import Item from './item.jsx';

import React from 'react';
import ReactDom from 'react-dom';
import itemData from '../data/products-data.json';
import itemSchema from '../data/products-schema.json';

class App extends React.Component {
  render() {
    const items = itemData.map((current) => {
      return <Item data={current} schema={itemSchema} key={current.id}/>
    })[0];
    return <h1><Hello/>, <World/>!
      <div>{items}</div>
    </h1>;
  }
}

ReactDom.render(<App/>, document.getElementById('container'));
