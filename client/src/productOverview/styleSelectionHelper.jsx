import React from 'react';
import { useEffect, useState } from 'react';
// import StyleSelections from './styleSelections.jsx';
import Carousel from 'react-bootstrap/Carousel';

class StyleSelectionHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // static getDerivedStateFromProps = (nextProps, state) => {
    // console.log('getDerived', nextProps)
    // if (nextProps.thumbStyle === ) {
    //   return {selected: true};
    // } else {
    //   return {selected: false};
    // }
  // }

  onSale = (sale_price) => {
    if (sale_price !== null) {
        return sale_price;
      }
  }


  // prevSelectedStyleStyling = () => {
  //   const element1 = document.querySelector(`.styles-selection-img${prevIndex}`);
  //   // console.log('HIT', prevIndex)
  //   if (element1 !== null) {
  //     element1.style.border = '4px solid #428047';
  //   }
  // }


  currentSelectedStyleStyling = () => {
    // console.log('BANG')
    // console.log(411534 === props.productStyles.results[Number(props.currentIndex)].style_id)
    const element = document.querySelector(`.styles-selection-img${this.props.currentIndex}`);
    if (411534 === this.props.productStyles.results[Number(this.props.currentIndex)].style_id && element !== null) {
      element.style.border = '5px solid red';
    }
    // const element = document.querySelector(`.styles-selection-img${props.currentIndex}`);
    if (Number(this.props.thumbStyle) === this.props.productStyles.results[Number(this.props.currentIndex)].style_id ) {
      element.style.border = '5px solid red';
    }
  }

  render () {
    if (this.props.productStyles.results !== undefined && this.props.productStyles.results.length !== 0 && this.props.productStyles.results[0].photos[0].thumbnail_url !== null) {
      // {prevSelectedStyleStyling(props)}
      {this.currentSelectedStyleStyling()}

      return (
        <React.Fragment>
          <section style={{marginBottom: 8}}>
            {this.props.productStyles.results.map((styleVals, i) => {
                return <img
                        className={`styles-selection-img${i}`}
                        onClick={this.props.onThumbnailClick}
                        key={i}
                        index={i}
                        src={styleVals.photos[0].thumbnail_url}
                        name={styleVals.name}
                        style_id={styleVals.style_id}
                        price={styleVals.original_price}
                        sale={this.onSale(styleVals.sale_price)}
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
    } else if (this.props.productStyles.results !== undefined && this.props.productStyles.results.length !== 0 && this.props.productStyles.results[0].photos[0].thumbnail_url === null) {
      return (
        <React.Fragment>
            <section>
            {this.props.productStyles.results.map((styleVals, j) => {
                return <img
                        className='styles-selection-img'
                        onClick={this.props.onThumbnailClick}
                        key={j}
                        src={"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"}
                        name={styleVals.name}
                        style_id={styleVals.style_id}
                        price={styleVals.original_price}
                        sale={this.onSale(styleVals.sale_price)}
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

}

export default StyleSelectionHelper;