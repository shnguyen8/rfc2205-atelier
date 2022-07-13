import React, { Component } from 'react';
import axios from 'axios';

function RelatedCard(props, {relatedProductsInfo}) {

  const {name, category} = props;

  return (
    <section>

      <div>

      <h4>{props.name}</h4>
      <h5>{props.category}</h5>
      <small>PRICE</small>
      <h5>RATING</h5>
      </div>

    </section>
  );
}

export default RelatedCard;