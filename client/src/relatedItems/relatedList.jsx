import React, { Component } from 'react';
import axios from 'axios';
import Card from './relatedCard.jsx';
import App from '../index.jsx';



class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: this.props.relatedProducts,
      products: this.props.products,
    }
  }



  render() {
    return (<Card relatedProducts={this.props.relatedProducts}/>)


  }
}

export default List