import React from 'react';
import { useEffect, useState } from 'react';
import StyleSelections from './styleSelections.jsx';
import Carousel from 'react-bootstrap/Carousel';

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
        {/* <Carousel>
          <Carousel.Item> */}
        <section style={{marginBottom: 8}}>
        {/* <Carousel variant={"dark"} interval={null} indicators={false} > */}
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
                        margin: 5,
                        border: '4px solid #428047',
                        borderRadius: '50%'
                      }}
                     />
          })}
          {/* </Carousel> */}
        </section>
      </React.Fragment>
    )
  } else if (props.productStyles.results !== undefined && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url === null) {
    return (
      <React.Fragment>
        {/* <Carousel>
          <Carousel.Item> */}
          <section>
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
                        height: 120,
                        width: 120
                      }}
                     />
          })}
          </section>
          {/* </Carousel.Item>
        </Carousel> */}
      </React.Fragment>
    )
  }
}

export default StyleSelectionHelper;