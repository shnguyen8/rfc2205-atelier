// import React, { Component } from 'react';
// import axios from 'axios';

// function RelatedOutfits(props, { relatedProductsInfo, onClick }) {

//   const { name, category } = props;

//   return (
//     <section>
//       <h2>Your Outfits</h2>
//       <div>
//       <img src={"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"} width="150" height="150"></img>
//       <h4>NAME</h4>
//         <sup>
//           <button onClick={(e)=>props.onClick}> ❌ </button>
//         </sup>
//         <p> CATEGORY</p>
//         <small>PRICE</small>
//         <h5>RATING</h5>

//       </div>

//     </section>
//   );
// }

// export default RelatedOutfits;

import React, { Component } from 'react';
import axios from 'axios';
import AddCard from './relatedAddCard.jsx';
import { Carousel } from 'react-bootstrap';
import App from '../index.jsx';
import Card from 'react-bootstrap/Card';
import OutfitCard from './relatedOutfitCard.jsx';



class RelatedOutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // relatedProducts: this.props.relatedProducts,
      // allProducts: this.props.allProducts,
      // relatedProductsInfo: [],
      // relatedStylesInfo: this.props.relatedStylesInfo,
      outfitCardsArray: [
        {productName: null,
        productCategory: null

        }
      ]
    }

  }

  clickEvent = () => {
    const newOutfit = {productName: 'Test123',
    productCategory: 'Current Product Category'
  }
  const pName = newOutfit.productName;
  let inArr = false;
  for (let i = 0; i < this.state.outfitCardsArray.length; i++) {
    let curItemName = this.state.outfitCardsArray[i].productName;
    if (curItemName === pName) {
      inArr = true
      break
    }
  }
  let outfitCardsArray = [
    ...this.state.outfitCardsArray
  ]
  if (!inArr){
    outfitCardsArray.push(newOutfit)
  } else {
    alert("Item already in outfits")
  }

  this.setState({outfitCardsArray});


  }



  render() {
    const { outfitCardsArray } = this.state;
    return (

        <Carousel variant={"dark"} interval={null} >
            <Carousel.Item
            show={4}>
              <AddCard
              onClick={this.clickEvent}
              />
            </Carousel.Item>
        {outfitCardsArray.map((card, index) =>(
          (card.productName) ?
            <Carousel.Item>
              <OutfitCard
              productName={card.productName}
              productCategory={card.productCategory}
              />
            </Carousel.Item> : null))}
        </Carousel>

    )


  }
}

export default RelatedOutfitList