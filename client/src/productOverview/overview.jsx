import React from 'react';
import axios from 'axios';
import ProdInfo from './prodInfo.jsx';
import ImageGallery from './imageGallery.jsx';
import StyleSelections from './styleSelections.jsx';
import AddToCart from './addToCart.jsx';


class ProdOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getStylePhotos = () => {
    this.props.productStyles.results.map((styleVals) => {
      return styleVals.photos[0].thumbnail_url;
    })
    // console.log(props)
  }


  render() {
    return (
      <React.Fragment>
        <h1>Product Overview</h1>
        <ImageGallery
          currentProduct= {this.props.currentProduct}
          products={this.props.products}
          productSpecs={this.props.productSpecs}
          productStyles={this.props.productStyles}
        />
        <ProdInfo
          currentProduct= {this.props.currentProduct}
          products={this.props.products}
          productSpecs={this.props.productSpecs}
          productStyles={this.props.productStyles}
        />
        <StyleSelections
          currentProduct= {this.props.currentProduct}
          products={this.props.products}
          productSpecs={this.props.productSpecs}
          productStyles={this.props.productStyles}
        />
        <AddToCart />

      </React.Fragment>

    )
  }
}

export default ProdOverview;