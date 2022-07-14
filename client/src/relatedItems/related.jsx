import React, { Component } from 'react';
import RelatedList from './relatedList.jsx';
import RelatedOutfits from './relatedOutfits.jsx';
import RelatedCarousel from './relatedCarousel.jsx';
import RelatedCard from './relatedCard.jsx'
import ControlledCarousel from './relatedCarouselBoot.jsx'


class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>

        <h2> Related Products</h2>

        <div>
          <RelatedList
            relatedProducts={this.props.relatedProducts}
            relatedProductsInfo={this.props.relatedProductsInfo}
            allProducts={this.props.allProducts}
            relatedStylesInfo={this.props.relatedStylesInfo}
          />
        </div>

        {/* <div>
          <RelatedCarousel>
            <img src="https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png" alt="placeholder" />
            <img src="https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png" alt="placeholder" />
            <img src="https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png" alt="placeholder" />

          </RelatedCarousel>
        </div> */}

        <div>
          <RelatedOutfits
            relatedProducts={this.props.relatedProducts}
            relatedProductsInfo={this.props.relatedProductsInfo}
            allProducts={this.props.allProducts}
            relatedStylesInfo={this.props.relatedStylesInfo}
          />
        </div>

        <div>
          {/* <ControlledCarousel/> */}
        </div>

      </div>
    )
  }
}
export default Related