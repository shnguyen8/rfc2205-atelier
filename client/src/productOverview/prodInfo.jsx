import React from 'react';
import { useEffect, useState } from 'react';

const ProdInfo = (props) => {

  let styleNameOption = (props) => {
    if (props.thumbnailStyleClicked === '' && props.productStyles.results.length !== 0) {
      return props.productStyles.results[0].name;
    } else {
      return props.thumbnailStyleClicked;
    }
  }

  let priceOption = (props) => {
    if (props.productStyles.results.length !== 0 && props.productStyles.results[0].sale_price !== null) {
      return <p>${props.productStyles.results[0].sale_price}</p>
    } else if (props.thumbnailPrice === '' && props.productStyles.results.length !== 0) {
      return <p>${props.productStyles.results[0].original_price}</p>
    } else if (props.thumbnailSalePrice !== '' && props.productStyles.results.length !== 0) {
      return <React.Fragment><s>${props.thumbnailPrice}</s><p style={{color: 'red'}}>${props.thumbnailSalePrice}</p></React.Fragment>
    } else {
      return <p>${props.thumbnailPrice}</p>
    }
  }

  if (props.productStyles.results !== undefined) {
    return (
      <React.Fragment>
        <p>Star Rating</p>
        <p>{props.productSpecs.category}</p>
        <h2>{props.productSpecs.name}</h2>
        <h4>{props.productSpecs.description}</h4>
        <React.Fragment>{priceOption(props)}</React.Fragment>
        <p>Style > {styleNameOption(props)}</p>
      </React.Fragment>
    )
  }
}

export default ProdInfo;