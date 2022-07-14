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
    this.state = {
      thumbnailClicked: '',
      thumbnailStyleClicked: '',
      thumbnailPrice: '',
      thumbnailSalePrice: '',
      thumbStyle: '',
      productStyles: {},
    }
  }

  componentDidMount = () => {
    this.getProductStyles();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.productSpecs.id !== prevProps.productSpecs.id) {
      this.getProductStyles(this.props.currentProduct);
      this.setState({
        thumbnailClicked: '',
        thumbnailStyleClicked: '',
        thumbnailPrice: '',
        thumbnailSalePrice: '',
        thumbStyle: '',
      })
    }
  }

  getProductStyles = () => {
    axios.get(`products/${this.props.currentProduct}/styles`)
      .then(res => {
        this.setState({
          productStyles: res.data,
        })
      })
      .catch(err => {console.log(err)})

  }

  onThumbnailClick = (e) => {
    // console.log('Clicked: ', e);
    if (e.target.attributes.sale !== undefined) {
      this.setState({
        thumbnailClicked: e.target.currentSrc,
        thumbnailStyleClicked: e.target.name,
        thumbnailPrice: e.target.attributes.price.value,
        thumbnailSalePrice: e.target.attributes.sale.value,
      })
    } else {
      this.setState({
        thumbnailClicked: e.target.currentSrc,
        thumbnailStyleClicked: e.target.name,
        thumbnailPrice: e.target.attributes.price.value,
        thumbnailSalePrice: '',
        thumbStyle: e.target.attributes.style_id.value,
      })
    }

  }



  render() {
    return (
      <React.Fragment>
        <h1>Product Overview</h1>
        <ImageGallery
          currentProduct= {this.props.currentProduct}
          products={this.props.products}
          productSpecs={this.props.productSpecs}
          productStyles={this.state.productStyles}
          thumbnailClicked={this.state.thumbnailClicked}
        />
        <ProdInfo
          currentProduct= {this.props.currentProduct}
          products={this.props.products}
          productSpecs={this.props.productSpecs}
          productStyles={this.state.productStyles}
          thumbnailStyleClicked={this.state.thumbnailStyleClicked}
          thumbnailPrice={this.state.thumbnailPrice}
          thumbnailSalePrice={this.state.thumbnailSalePrice}
        />
        <StyleSelections
          currentProduct= {this.props.currentProduct}
          products={this.props.products}
          productSpecs={this.props.productSpecs}
          productStyles={this.state.productStyles}
          onThumbnailClick={this.onThumbnailClick}
        />
        <AddToCart
          currentProduct= {this.props.currentProduct}
          products={this.props.products}
          productSpecs={this.props.productSpecs}
          productStyles={this.state.productStyles}
          thumbStyle={this.state.thumbStyle}
        />

      </React.Fragment>

    )
  }
}

export default ProdOverview;