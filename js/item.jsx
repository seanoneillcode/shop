'use strict'

import React from 'react';

class Item extends React.Component {

  render() {
    return <div>this is an item, id:{this.props.item.id}</div>
  }
}

export default Item;
