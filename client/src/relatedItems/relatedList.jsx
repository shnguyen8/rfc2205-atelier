import React, { Component } from 'react';
import axios from 'axios';
import RelatedCard from './relatedCard.jsx';
import RelatedCarousel from './relatedCarousel.jsx';
import App from '../index.jsx';



class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: this.props.relatedProducts,
      allProducts: this.props.allProducts,
      relatedProductsInfo: [],
      relatedStylesInfo: this.props.relatedStylesInfo,
      relatedOutfits: [],
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.relatedProducts != prevProps.relatedProducts) {
      this.setState({ relatedProducts: this.props.relatedProducts })
    }
    if (this.props.allProducts != prevProps.allProducts) {
      this.setState({ allProducts: this.props.allProducts })
      this.setState({ relatedProductsInfo: this.props.allProducts.filter(product => this.state.relatedProducts.includes(product.id)) })
    }

  }



  render() {
    return (
      <section>
        {/* <RelatedCarousel> */}

        {(this.state.relatedProductsInfo.length > 0) ? this.state.relatedProductsInfo.map((product, i) => (<RelatedCard
          name={product.name}
          category={product.category}
          key={i}
        />))
          : <p>Related products are loading...</p>}

        {/* </RelatedCarousel> */}
      </section>

    )


  }
}

export default RelatedList