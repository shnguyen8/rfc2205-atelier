import React, { Component } from 'react';
import App from '../index.jsx';

function Card(props, {relatedProducts, products, onClick}) {

  return (
    <section>

      <div>
      <h4>{relatedProducts}</h4>
      <h4>{products}</h4>
      <h3>{props.name}</h3>
      <small>PRICE</small>
      <h5>RATING</h5>
      </div>

    </section>
  );
}

export default Card;