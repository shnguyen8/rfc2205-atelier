import React from 'react';
import { useEffect, useState } from 'react';
import StyleSelections from './styleSelections.jsx';

const StyleSelectionHelper = (props) => {
  // console.log(props)


  let onSale = (sale_price) => {
    if (sale_price !== null) {
        return sale_price;
      }
  }


  if (props.productStyles.results !== undefined && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url !== null) {
    return (
      <React.Fragment>
        <section>
          {props.productStyles.results.map((styleVals, i) => {
              return <img
                      onClick={props.onThumbnailClick}
                      key={i}
                      src={styleVals.photos[0].thumbnail_url}
                      name={styleVals.name}
                      style_id={styleVals.style_id}
                      price={styleVals.original_price}
                      sale={onSale(styleVals.sale_price)}
                      style={{
                        resizeMode: "center",
                        height: 100,
                        width: 100,
                        border: '4px solid grey',
                        borderRadius: '50%'
                      }}
                     />
          })}
        </section>
      </React.Fragment>
    )
  } else if (props.productStyles.results !== undefined && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url === null) {
    return (
      <React.Fragment>
          {props.productStyles.results.map((styleVals, j) => {
              return <img
                      onClick={props.onThumbnailClick}
                      key={j}
                      src={"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"}
                      name={styleVals.name}
                      style_id={styleVals.style_id}
                      price={styleVals.original_price}
                      sale={onSale(styleVals.sale_price)}
                      style={{
                        resizeMode: "center",
                        height: 150,
                        width: 150
                      }}
                     />
          })}
      </React.Fragment>
    )
  }
}

export default StyleSelectionHelper;