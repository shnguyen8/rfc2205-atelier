import React from 'react';
import axios from 'axios';

const ProdInfo = (props) => {
  // console.log(props)


    return (
      <React.Fragment>
        <p>Star Rating</p>
        <p>{props.productSpecs.category}</p>
        <h2>{props.productSpecs.name}</h2>
        <p>${props.productSpecs.default_price}</p>
      </React.Fragment>

    )
}

export default ProdInfo;