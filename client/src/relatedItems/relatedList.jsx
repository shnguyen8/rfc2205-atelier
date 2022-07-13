import React, { Component } from 'react';
import axios from 'axios';
import Card from './relatedCard.jsx';
import App from '../index.jsx';



class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItemsInfo: this.props.relatedProductsInfo,
    }

  }

  render() {
    return (
      <section>

        {(this.props.relatedProductsInfo.length > 0) ? this.props.relatedProductsInfo.map(item => <p>{item.name} <br/>
        {item.category}</p>) : null}

      </section>

    )


  }
}

export default RelatedList