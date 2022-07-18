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


  let quantityArr = [];
  let quantityOptions = (props) => {
    // console.log('run', props.selectedSize !== '' && props.selectedSize !== 'Select Size')
    if (props.selectedSize !== '' && props.selectedSize !== 'Select Size') {
      for (var i = 0; i < sizesAndQuantArr.length; i++) {
        if (props.selectedSize === sizesAndQuantArr[i].size) {
          for (var j = 1; j <= sizesAndQuantArr[i].quantity; j++) {
            if (j <= 15) {
              quantityArr.push(j);
              // console.log(quantityArr)
            }
          }
        }
      }
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
          <select onClick={props.sizeSelectionClick}>
            <option>Select Size</option>
            {sizesAndQuantArr.map((sizesAndQuantObjs, k) => {
            return <option  key={k}>{sizesAndQuantObjs.size}</option>
            })}
          </select>
          <select>
            {quantityOptions(props)}
            <option>-</option>
            {quantityArr.map((quantities, l) => {
              return <option key={l}>{quantities}</option>
            })}
          </select>
          <button>Add To Cart</button>
          <button>Share</button>
        </React.Fragment>

      )
    }
  }
}

export default AddToCart;