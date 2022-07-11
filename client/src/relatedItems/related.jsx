import React, { Component } from 'react';
import List from './relatedList.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    }


  render() {
    return(
      <div>

      <h2>Related Products</h2>

      <div>
        <List/>
      </div>

      </div>
    )
  }
}
  export default Related;