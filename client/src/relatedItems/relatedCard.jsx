import React, { Component } from 'react';
import axios from 'axios';

function RelatedCard(props, { relatedStylesInfo, relatedProductsInfo, onClick }) {

  const { name, category } = props;

  return (
    <section className="card">

      <div>
        <p>------------------------------</p>
        <img src={"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"} width="150" height="150"></img>
        <h4>{props.name}</h4>
        <sup>
          <button onClick={(e) => props.onClick}> ⭐️ </button>
        </sup>
        <p>{props.category}</p>
        <small>PRICE</small>
        <h5>RATING</h5>
        <p>------------------------------</p>

      </div>

    </section>
  );
}

export default RelatedCard