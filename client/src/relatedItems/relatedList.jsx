import React, { Component } from 'react';
import axios from 'axios';
import RelatedCard from './relatedCard.jsx';
import { Stack } from 'react-bootstrap';
import App from '../index.jsx';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ComparisonTable from './relatedComparison.jsx'
import RelatedCarousel from './relatedCarousel.jsx'



class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: this.props.relatedProducts,
      allProducts: this.props.allProducts,
      relatedProductsInfo: [],
      relatedStylesInfo: this.props.relatedStylesInfo,
      isOpen: false,
      relatedData: [],
      curRelatedProduct: ""
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.relatedProducts != prevProps.relatedProducts) {
      this.setState({ relatedProducts: this.props.relatedProducts })
    }
    if (this.props.allProducts != prevProps.allProducts) {
      this.setState({ allProducts: this.props.allProducts })
      this.setState({ relatedProductsInfo: this.props.allProducts.filter(product => this.state.relatedProducts.includes(product.id)) })
    }
    if (this.props.relatedData != prevProps.relatedData) {
      this.setState({ relatedData: this.props.relatedData })
    }

  }


  openModal = (productName) => {
    this.setState({
      isOpen: true,
      curRelatedProduct: productName
    })
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto' }} >
          <RelatedCarousel show={3}>

            {this.state.relatedData.length > 0 ? this.state.relatedData.map((product, index) => (
              <Stack direction="horizontal">
                <RelatedCard
                  btnindex={index}
                  onClick={() => this.openModal(product)}

                  name={product.name}
                  image={(product && product.hasOwnProperty("styles"))
                    ? product.styles[0].photos[0].thumbnail_url
                    : null}

                  price={(product && product.hasOwnProperty("styles") && product.styles[0].sale_price === null) ?
                    product.styles[0].original_price :
                    ((product && product.hasOwnProperty("styles")) && product.styles[0].sale_price !== null) ?
                      product.styles[0].sale_price : null}

                  category={product.category}


                  rating={(product && product.hasOwnProperty("reviews"))
                    ? product.reviews.ratings
                    : null}

                  key={product.id}

                /></Stack>))

              : <span>Related products are loading...</span>}


          </RelatedCarousel>
        </div>


        <Modal
          styles={{ margin: '100px' }}
          show={this.state.isOpen}
          onHide={this.closeModal}>

          <Modal.Header closeButton size="lg">
            <Modal.Title> Comparing </Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <div>
              <ComparisonTable
                curProduct={this.props.productSpecs}
                relatedData={this.state.relatedData}
                curRelatedProduct={this.state.curRelatedProduct}
              />
            </div>

          </Modal.Body>

        </Modal>
      </React.Fragment >


    )

  }
}

export default RelatedList