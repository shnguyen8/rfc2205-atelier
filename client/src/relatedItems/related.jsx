import React, { Component } from 'react';
import RelatedList from './relatedList.jsx';
import RelatedOutfitList from './relatedOutfitList.jsx';
import RelatedCard from './relatedCard.jsx';
import axios from 'axios';
import ComparisonTable from './relatedComparison.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      currentProduct: this.props.currentProduct,
      relatedData: []
    };
  }

  componentDidMount() {
    this.fetchRelatedProducts()
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProduct !== prevProps.currentProduct) {
      this.fetchRelatedProducts(this.props.currentProduct);
      this.setState({
        currentProduct: this.props.currentProduct,
        relatedData: [],
        inRelatedData: []
      })
    }
  }


  fetchRelatedProducts =  async() => {
    let toAdd = []
    let added = []
    axios.get(`/products/${this.props.currentProduct}/related`)
      .then((res) => {
        this.setState({
          relatedProducts: res.data
        })
        res.data.forEach((id) => {
          axios.get('/products/' + id)
            .then((resData) => {
              axios.get('/products/' + id + '/styles')
                .then((styleData) => {
                  axios.get('reviews/meta/?product_id=' + id)
                    .then((reviewData) => {
                      const allRelatedData = resData.data;
                      allRelatedData['styles'] = styleData.data.results;
                      allRelatedData['reviews'] = reviewData.data;
                      if (!added.includes(allRelatedData.id)) {
                        toAdd.push(allRelatedData)
                        added.push(allRelatedData.id)
                        this.setState({relatedData: toAdd})

                      }

                    })
                })

            })
        })

      })


  }


  render() {
    return (
      <div>

        <h2> Related Products</h2>

        <div>
          <RelatedList
            relatedProducts={this.state.relatedProducts}
            relatedProductsInfo={this.props.relatedProductsInfo}
            allProducts={this.props.allProducts}
            productSpecs={this.props.productSpecs}
            relatedData={this.state.relatedData}
            openModal={this.state.openModal}
          />
        </div>

        <div style={{marginTop: 'auto'}}>
          <h2> Your Outfits </h2>
          <RelatedOutfitList
            relatedProducts={this.props.relatedProducts}
            relatedProductsInfo={this.props.relatedProductsInfo}
            allProducts={this.props.allProducts}
            relatedStylesInfo={this.props.relatedStylesInfo}
            productSpecs={this.props.productSpecs}
            productStyles={this.props.productStyles}
            metaData={this.props.metaData}
          />
        </div>


      </div>
    )
  }
}
export default Related