import React, { Component } from 'react';
import axios from 'axios';

function RelatedCard(props, {relatedProductsInfo}) {

  const {name, category} = props;

  return (
    <section>

      <div>
<<<<<<< HEAD
      <img src="https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" ></img>
      <h4>{props.relatedProducts}</h4>
      <h4>{props.products.name}</h4>
      <h3>{props.products.category}</h3>
=======

      <h4>{props.name}</h4>
      <h5>{props.category}</h5>
      <small>PRICE</small>
>>>>>>> 425f56d3b58de569d7abb39cf41d363cfe055832
      <h5>RATING</h5>
      </div>

    </section>
  );
}

export default RelatedCard;