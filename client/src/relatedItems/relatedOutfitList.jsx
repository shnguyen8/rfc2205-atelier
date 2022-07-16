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
import OutfitCard from './relatedOutfitCard.jsx';
import { Carousel } from 'react-bootstrap';
import App from '../index.jsx';
import Card from 'react-bootstrap/Card';



class RelatedOutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // relatedProducts: this.props.relatedProducts,
      // allProducts: this.props.allProducts,
      // relatedProductsInfo: [],
      // relatedStylesInfo: this.props.relatedStylesInfo,
    }

  }



  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.relatedProducts != prevProps.relatedProducts) {
  //     this.setState({ relatedProducts: this.props.relatedProducts})
  //   }
  //   if (this.props.allProducts != prevProps.allProducts) {
  //     this.setState({ allProducts: this.props.allProducts })
  //     this.setState({ relatedProductsInfo: this.props.allProducts.filter(product => this.state.relatedProducts.includes(product.id)) })
  //   }
  // }


  render() {
    return (

        <Carousel>
            <Carousel.Item
            show={4}>
              <OutfitCard
              />
            </Carousel.Item>
        </Carousel>

    )


  }
}

export default RelatedOutfitList