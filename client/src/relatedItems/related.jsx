import React, { Component } from 'react';
import RelatedList from './relatedList.jsx';
import RelatedOutfitList from './relatedOutfitList.jsx';
import RelatedCard from './relatedCard.jsx';
import axios from 'axios';
import ComparisonTable from './relatedComparison.jsx';

// var mockData = [
//   {img:,
//   price: '$140.00',

//   },
//   {

//   },
//   {

//   },
// ]

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      currentProduct: this.props.currentProduct,
      // relatedStylesInfo: {},
      // relatedReviews: [],
      relatedData: {},
    };
  }

  componentDidMount() {
    this.fetchRelatedProducts()
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProduct !== prevProps.currentProduct) {
      this.fetchRelatedProducts(this.props.currentProduct);
      this.setState({
        currentProduct: this.props.currentProduct
      })
    }
  }


  fetchRelatedProducts = () => {
    // console.log(this.props.currentProduct)
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
                      this.setState({
                        // relatedStylesInfo: allRelatedData['styles'],
                        // relatedReviews: allRelatedData['reviews']
                        relatedData: { ...allRelatedData }
                      }, () => { console.log(this.state.relatedData, 'SHOW ME AHHHHHHHH') })


                    })
                })

            })
        })
      })

    //   .then((res) => {
    //     console.log(res)
    //     return res.forEach(id => { axios.get(`/products/${id}/styles`) }
    //   this.setState({
    //       relatedStylesInfo: res.data
    //     })
    // })
    //   .then((res) => {
    //     return axios.get(`/reviews/meta/?product_id=${res}`)
    //     this.setState({
    //       relatedReviews: res.data
    //     })
    //   })
  }

  // fetchStylesByID = (arr) => {
  //   this.state.relatedProducts.forEach(id => {
  //     axios.get(`/products/${id}/styles`)
  //       .then(res => {
  //         this.setState({ relatedStylesInfo: [...this.state.relatedStylesInfo, res.data] })
  //       })
  //   })
  // }

  // fetchReviewsByID = (arr) => {
  //   this.state.relatedProducts.forEach(id => {
  //     axios.get(`products/${id}/meta`)
  //     .then(res => {
  //       this.setState({ relatedReviews: [...this.state.relatedReviews, res.data] })
  //     })
  //   })
  // }



  render() {
    return (
      <div style={{
        margin: 'auto',
        width: '50%',
        padding: '10px',
      }} >

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

        <div>
          <h2> Your Outfits </h2>
          <RelatedOutfitList
            relatedProducts={this.props.relatedProducts}
            relatedProductsInfo={this.props.relatedProductsInfo}
            allProducts={this.props.allProducts}
            relatedStylesInfo={this.props.relatedStylesInfo}
          />
        </div>

        {/* <div>
          <ComparisonModal show={this.state.isOpen} onHide={this.closeModal} />
        </div> */}


      </div>
    )
  }
}
export default Related