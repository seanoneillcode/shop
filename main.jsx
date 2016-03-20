import Hello from './hello.jsx';
import World from './world.jsx';

import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {
    return <h1><Hello/>, <World/>!</h1>
  }
}

ReactDom.render(<App/>, document.getElementById('container'));
