import React, { Component } from 'react';
import RelatedList from './relatedList.jsx';
import RelatedOutfits from './relatedOutfits.jsx';
import RelatedCard from './relatedCard.jsx';
import axios from 'axios';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      currentProduct: this.props.currentProduct,
      relatedStylesInfo: {},
      relatedReviews: [],
    };
  }

  componentDidMount() {
    this.fetchRelatedProducts()

  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProduct !== prevProps.currentProduct) {
      this.fetchRelatedProducts(this.props.currentProduct);
      this.setState({
        currentProduct: this.props.currentProduct
      })
    }
  }


  fetchRelatedProducts = () => {
    // console.log(this.props.currentProduct)
    axios.get(`/products/${this.props.currentProduct}/related`)
    .then((res) => {
      this.setState({
        relatedProducts: res.data
      })
    })
    .then((data) => {
      return axios.get(`/products/${data}/styles`)
      this.setState({
        relatedStylesInfo: res.data,
      })
    })
    .then((res) => {
      return axios.get(`products/${res}/meta`)
      this.setState({
        relatedReviews: res.data
      })
    })
  }

  // fetchStylesByID = (arr) => {
  //   this.state.relatedProducts.forEach(id => {
  //     axios.get(`/products/${id}/styles`)
  //       .then(res => {
  //         this.setState({ relatedStylesInfo: [...this.state.relatedStylesInfo, res.data] })
  //       })
  //   })
  // }

  // fetchReviewsByID = (arr) => {
  //   this.state.relatedProducts.forEach(id => {
  //     axios.get(`products/${id}/meta`)
  //     .then(res => {
  //       this.setState({ relatedReviews: [...this.state.relatedReviews, res.data] })
  //     })
  //   })
  // }

  render() {
    return (
      <div>

        <h2> Related Products</h2>

        <div>
          <RelatedList
            relatedProducts={this.state.relatedProducts}
            relatedProductsInfo={this.props.relatedProductsInfo}
            allProducts={this.props.allProducts}
            relatedStylesInfo={this.state.relatedStylesInfo}
          />
        </div>

        <div>
          <RelatedOutfits
            relatedProducts={this.props.relatedProducts}
            relatedProductsInfo={this.props.relatedProductsInfo}
            allProducts={this.props.allProducts}
            relatedStylesInfo={this.props.relatedStylesInfo}
          />
        </div>

      </div>
    )
  }
}
export default Related