import React, { Component } from 'react';
import RelatedList from './relatedList.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    }


  render() {
    return(
      <div>

      <h2> Related Products</h2>

      <div>
        <RelatedList
        relatedProducts={this.props.relatedProducts}
        relatedProductsInfo={this.props.relatedProductsInfo}
        products={this.props.products} productSpecs={this.props.productSpecs}
        productStyles={this.props.productStyles}/>
      </div>

      </div>
    )
  }
}
  export default Related