import React from 'react';
import { useEffect, useState } from 'react';

const AddToCart = (props) => {
  // console.log(props);



  if (props.productStyles.results !== undefined) {
    return (
      <React.Fragment>
        <select>
          <option value='Select Size'>Select Size</option>
          {props.productStyles.results.map((styleVals, i) => {
            for (var key in styleVals.skus) {
              // console.log(styleVals.skus)
              return <option key={i}>{styleVals.skus[key].size}</option>
            }
          })}
        </select>
        <select>
          <option>-</option>
        </select>
        <button>Add To Cart</button>
        <button>Share</button>
      </React.Fragment>

    )
  }
}

export default AddToCart;