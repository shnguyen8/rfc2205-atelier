import React, { Component } from 'react';
import axios from 'axios';
import Card from './relatedCard.jsx';



class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      styles: [],
      products: [],
    }
    this.fetchRelatedProducts = this.fetchRelatedProducts.bind(this);
    this.fetchStyles = this.fetchStyles.bind(this);
  }
  componentDidMount() {
    this.fetchRelatedProducts();
    this.fetchStyles();
  }

  fetchRelatedProducts() {
    axios.get('/products').then(res => {
      this.setState({
        products: [res.data][0]
      })
    })
  }

  fetchStyles() {
    axios.get('/products/66643/styles').then(res => {
      this.setState({
        styles: [res.data][1]
      })
    })
  }

  render() {
    return (
      this.state.products.map(product => (<Card
        name={product.name}
        category={product.category}
      />))
  )
  }
}

export default List;