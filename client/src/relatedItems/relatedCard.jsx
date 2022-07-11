import React, { Component } from 'react';

function Card(props, {product, onClick}) {

  return (
    <section>
      <img src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"width="384" height="192" alt="header image"></img>

      <div>
      <h4>{props.id}</h4>
      <h4>{props.category}</h4>
      <h3>{props.name}</h3>
      <small>PRICE</small>
      <h5>RATING</h5>
      </div>

    </section>
  );
}

export default Card;