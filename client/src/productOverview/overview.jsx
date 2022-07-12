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
        <iframe
          src="https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
          height='450px'
          width='300px'
          title='Product Picture'
        />
        <ProdInfo
          currentProduct= {this.props.currentProduct}
          products={this.props.products}
          productSpecs={this.props.productSpecs}
          productStyles={this.props.productStyles}
        />

      </React.Fragment>

    )
  }
}

export default ProdOverview;