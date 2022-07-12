import React, { Component } from 'react';
import axios from 'axios';
import Card from './relatedCard.jsx';
import App from '../index.jsx';



class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (

    <Card relatedProducts={this.props.relatedProducts} products={this.props.products}productStyles={this.props.productStyles}/>

    )


  }
}

export default List