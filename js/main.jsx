import Hello from './hello.jsx';
import World from './world.jsx';
import Item from './item.jsx';

import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {
    const items = [
      {
        id:"1"
      },{
        id:"2"
      }
    ].map((current) => {
      return <Item item={current} key={current.id}/>
    });
    return <h1><Hello/>, <World/>!
      <div>{items}</div>
    </h1>;
  }
}

ReactDom.render(<App/>, document.getElementById('container'));
