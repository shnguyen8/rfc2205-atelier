import React from 'react';
import { useEffect, useState } from 'react';
import StyleSelections from './styleSelections.jsx';

const StyleSelectionHelper = (props) => {
  // console.log(props.productStyles)


  let onSale = (sale_price) => {
    if (sale_price !== null) {
        return sale_price;
      }
  }


  if (props.productStyles.results !== undefined) {
    return (
      <React.Fragment>
        <section>
          {props.productStyles.results.map((styleVals, i) => {
            if (styleVals.photos[0].thumbnail_url !== null) {
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
                        height: 150,
                        width: 150
                      }}
                     />
            }
          })}
        </section>
      </React.Fragment>
    )
  }
}

export default StyleSelectionHelper;