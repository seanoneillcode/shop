import Hello from './hello.jsx';
import World from './world.jsx';
import Item from './item.jsx';

import React from 'react';
import ReactDom from 'react-dom';
import itemData from '../data/products-data.json';
import itemSchema from '../data/products-schema.json';

class App extends React.Component {
  render() {
    const item = <Item data={itemData} schema={itemSchema} />;
    return <div>{item}</div>;
  }
}

ReactDom.render(<App/>, document.getElementById('container'));
