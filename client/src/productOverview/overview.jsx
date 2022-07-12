import React from 'react';
import axios from 'axios';
import ProdInfo from './prodInfo.jsx';

class ProdOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <React.Fragment>
        <h1>Product Overview</h1>
        <ProdInfo/>

      </React.Fragment>

    )
  }
}

export default ProdOverview;