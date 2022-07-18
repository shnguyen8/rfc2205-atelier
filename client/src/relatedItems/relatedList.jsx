import React, { Component } from 'react';
import axios from 'axios';
import RelatedCard from './relatedCard.jsx';
import { Carousel } from 'react-bootstrap';
import App from '../index.jsx';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ComparisonTable from './relatedComparison.jsx'



class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: this.props.relatedProducts,
      allProducts: this.props.allProducts,
      relatedProductsInfo: [],
      relatedStylesInfo: this.props.relatedStylesInfo,
      isOpen: false,
      relatedData: []
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.relatedProducts != prevProps.relatedProducts) {
      this.setState({relatedProducts: this.props.relatedProducts})
    }
    if (this.props.allProducts != prevProps.allProducts) {
      this.setState({ allProducts: this.props.allProducts })
      this.setState({ relatedProductsInfo: this.props.allProducts.filter(product => this.state.relatedProducts.includes(product.id)) })
    }
    if(this.props.relatedData != prevProps.relatedData) {
      this.setState({relatedData: this.props.relatedData})
    }

  }


  openModal = () => {
    this.setState({
      isOpen: true,
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
        <Carousel variant={"dark"} interval={null} indicators={false} >
          {this.state.relatedProductsInfo.length > 0 ? this.state.relatedProductsInfo.map((product, index) => (
            <Carousel.Item key={product.id}
            >
              <RelatedCard
                onClick={this.openModal}
                key={this.state.relatedData[index]}

                // onClick={()=> this.setState({relatedData: this.props.relatedData})}
                name={product.name}


                category={product.category}


                rating={(this.state.relatedData[index] && this.state.relatedData[index].hasOwnProperty("reviews"))
                  ? this.state.relatedData[index].reviews.ratings
                  : null}

              />
            </Carousel.Item>))
            : <span>Related products are loading...</span>}
        </Carousel>



        <Modal
          styles={{ margin: '100px' }}
          show={this.state.isOpen}
          onHide={this.closeModal}>

          <Modal.Header closeButton size="lg">
            <Modal.Title> Comparing</Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <div>
              <ComparisonTable productSpecs={this.props.productSpecs}
              />
            </div>

          </Modal.Body>

        </Modal>
      </React.Fragment>


    )

  }
}

export default RelatedList