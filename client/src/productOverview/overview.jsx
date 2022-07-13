import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProdInfo from './prodInfo.jsx';
import ImageGallery from './imageGallery.jsx';
import StyleSelections from './styleSelections.jsx';
import AddToCart from './addToCart.jsx';


class ProdOverview extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      thumbnailClicked: '',
      thumbnailStyleClicked: '',
    }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.productStyles.product_id !== this.props.productStyles.product_id) {
      this.setState({
        thumbnailClicked: '',
        thumbnailStyleClicked: '',
      })
    }
  }


  onThumbnailClick = (e) => {
    this.setState({
      thumbnailClicked: e.target.currentSrc,
      thumbnailStyleClicked: e.target.name,
    })
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
          thumbnailClicked={this.state.thumbnailClicked}
        />
        <ProdInfo
          currentProduct= {this.props.currentProduct}
          products={this.props.products}
          productSpecs={this.props.productSpecs}
          productStyles={this.props.productStyles}
          thumbnailStyleClicked={this.state.thumbnailStyleClicked}
        />
        <StyleSelections
          currentProduct= {this.props.currentProduct}
          products={this.props.products}
          productSpecs={this.props.productSpecs}
          productStyles={this.props.productStyles}
          onThumbnailClick={this.onThumbnailClick}
        />
        <AddToCart
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