import React from 'react';
import { useEffect, useState } from 'react';

const ProdInfo = (props) => {
  // console.log(props);

  let styleNameOption = (props) => {
    // console.log(props)
    if (props.thumbnailStyleClicked === '' && props.productStyles.results.length !== 0) {
      return props.productStyles.results[0].name;
    } else {
      return props.thumbnailStyleClicked;
    }
  }

  if (props.productStyles.results !== undefined) {
    return (
      <React.Fragment>
        <p>Star Rating</p>
        <p>{props.productSpecs.category}</p>
        <h2>{props.productSpecs.name}</h2>
        <p>${props.productSpecs.default_price}</p>
        <p>Style > {styleNameOption(props)}</p>
      </React.Fragment>
    )
  }
}

export default ProdInfo;