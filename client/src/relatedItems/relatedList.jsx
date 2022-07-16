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
  }

  openModal = () => {
    this.setState({
      isOpen: true
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
        <Carousel variant={"dark"}>
          {(this.state.relatedProductsInfo.length > 0) ? this.state.relatedProductsInfo.map((product, i) => (
            <Carousel.Item key={product.id}
            >
              <RelatedCard
                onClick={this.openModal}
                name={product.name}
                category={product.category}
                key={i}
              />
            </Carousel.Item>))
            : <span>Related products are loading...</span>}
        </Carousel>

        <Modal
        styles={{margin:'100px'}}
        show={this.state.isOpen}
        onHide={this.closeModal}>

        <Modal.Header closeButton size="lg">
        <Modal.Title> Comparing </Modal.Title>
        </Modal.Header>

        <Modal.Body>

        <div>
          <ComparisonTable/>
        </div>

        </Modal.Body>

        </Modal>
        </React.Fragment>


    )

  }
}

export default RelatedList