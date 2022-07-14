import React from 'react';
import { useEffect, useState } from 'react';

const AddToCart = (props) => {
  // console.log(props);

  var sizesAndQuantArr = [];

  let sizeOptions = (props) => {
    if (props.thumbStyle === '' && props.productStyles.results.length !== 0) {
      for (var key in props.productStyles.results[0].skus) {
        sizesAndQuantArr.push(props.productStyles.results[0].skus[key])
      }
    }
    for (var i = 0; i < props.productStyles.results.length; i++) {
      if (Number(props.thumbStyle) === props.productStyles.results[i].style_id) {
        for (var key in props.productStyles.results[i].skus) {
          sizesAndQuantArr.push(props.productStyles.results[i].skus[key])
        }
      } else {
        continue;
      }
      break;
    }
  }


  if (props.productStyles.results !== undefined) {
    sizeOptions(props);
    if (sizesAndQuantArr.length === 0 || sizesAndQuantArr[0].size === null) {
      return (
        <React.Fragment>
          <select disabled>
            <option>OUT OF STOCK</option>
          </select>
          <select disabled>
            <option>-</option>
          </select>
          <button disabled>Add To Cart</button>
          <button>Share</button>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <select>
            <option>Select Size</option>
            {sizesAndQuantArr.map((sizesAndQuantObjs, k) => {
            return <option key={k}>{sizesAndQuantObjs.size}</option>
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
}

export default AddToCart;