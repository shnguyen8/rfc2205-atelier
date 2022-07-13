import React, { Component } from 'react';
import App from '../index.jsx';

function Card(props, {relatedProducts, products, onClick}) {

  return (
    <section>

      <div>
      <img src="https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" ></img>
      <h4>{props.relatedProducts}</h4>
      <h4>{props.products.name}</h4>
      <h3>{props.products.category}</h3>
      <h5>RATING</h5>
      </div>

    </section>
  );
}

export default Card;