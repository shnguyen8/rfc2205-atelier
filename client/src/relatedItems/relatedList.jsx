import React, { Component } from 'react';
import axios from 'axios';
import RelatedCard from './relatedCard.jsx';
import { Carousel } from 'react-bootstrap';
import App from '../index.jsx';
import Card from 'react-bootstrap/Card';



class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: this.props.relatedProducts,
      allProducts: this.props.allProducts,
      relatedProductsInfo: [],
      relatedStylesInfo: this.props.relatedStylesInfo,
    }

  }



  componentDidUpdate(prevProps, prevState) {
    if (this.props.relatedProducts != prevProps.relatedProducts) {
      this.setState({ relatedProducts: this.props.relatedProducts})
    }
    if (this.props.allProducts != prevProps.allProducts) {
      this.setState({ allProducts: this.props.allProducts })
      this.setState({ relatedProductsInfo: this.props.allProducts.filter(product => this.state.relatedProducts.includes(product.id)) })
    }
  }


  render() {
    return (

        <Carousel>
          {(this.state.relatedProductsInfo.length > 0) ? this.state.relatedProductsInfo.map((product, i) => (
            <Carousel.Item key={product.id}
            show={4} >
              <RelatedCard
                name={product.name}
                category={product.category}
                key={i}
              />
            </Carousel.Item>))
            : <p>Related products are loading...</p>}
        </Carousel>

    )


  }
}

export default RelatedList