import React from 'react';
import { useEffect, useState } from 'react';
// import StyleSelections from './styleSelections.jsx';
import Carousel from 'react-bootstrap/Carousel';

const StyleSelectionHelper = (props) => {
  // console.log(props)

  let onSale = (sale_price) => {
    if (sale_price !== null) {
        return sale_price;
      }
  }

  // const { children, show } = props;
  // const [prevIndex, setPrevIndex] = useState(NaN);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [length, setLength] = useState(children.length);

  // const chosen = () => {
  //   if (currentIndex < (length - show)) {
  //     setCurrentIndex(prevState => prevState + 1)
  //   }
  // }

  // let static getDerivedStateFromProps = (props, state) => {
  //   if (props.currentIndex !== prevIndex) {
  //     prevSelectedStyleStyling(props);
  //   }
  // }
  let prevSelectedStyleStyling = (props) => {
    const element1 = document.querySelector(`.styles-selection-img${prevIndex}`);
    // console.log('HIT', prevIndex)
    if (element1 !== null) {
      element1.style.border = '4px solid #428047';
    }
  }


  let currentSelectedStyleStyling = (props) => {
    // console.log('BANG')

    // console.log(411534 === props.productStyles.results[Number(props.currentIndex)].style_id)
    const element = document.querySelector(`.styles-selection-img${props.currentIndex}`);
    if (411534 === props.productStyles.results[Number(props.currentIndex)].style_id && element !== null) {
      element.style.border = '5px solid red';
    }
    // const element = document.querySelector(`.styles-selection-img${props.currentIndex}`);
    if (Number(props.thumbStyle) === props.productStyles.results[Number(props.currentIndex)].style_id ) {

      element.style.border = '5px solid red';
    }

  }

  if (props.productStyles.results !== undefined && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url !== null) {
    // {prevSelectedStyleStyling(props)}
    {currentSelectedStyleStyling(props)}

    return (
      <React.Fragment>
        <section style={{marginBottom: 8}}>
          {props.productStyles.results.map((styleVals, i) => {
              return <img
                      className={`styles-selection-img${i}`}
                      onClick={props.onThumbnailClick}
                      key={i}
                      indexof={i}
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
        </section>
      </React.Fragment>
    )
  } else if (props.productStyles.results !== undefined && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url === null) {
    return (
      <React.Fragment>
          <section>
          {props.productStyles.results.map((styleVals, j) => {
              return <img
                      className='styles-selection-img'
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
      </React.Fragment>
    )
  }
}

export default StyleSelectionHelper;