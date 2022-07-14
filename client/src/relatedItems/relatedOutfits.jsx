import React, { Component } from 'react';
import axios from 'axios';

function RelatedOutfits(props, { relatedProductsInfo, onClick }) {

  const { name, category } = props;

  return (
    <section>
      <h2>Your Outfits</h2>
      <div>
      <img src={"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"} width="150" height="150"></img>
      <h4>NAME</h4>
        <sup>
          <button onClick={(e)=>props.onClick}> ❌ </button>
        </sup>
        <p> CATEGORY</p>
        <small>PRICE</small>
        <h5>RATING</h5>

      </div>

    </section>
  );
}

export default RelatedOutfits;