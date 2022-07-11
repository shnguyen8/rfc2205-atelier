import { render } from 'react-dom';
import React from 'react';
import Ratings from './ratingsAndReviews/ratings.jsx';
import ProdOverview from './productOverview/overview.jsx';
import Related from './relatedItems/related.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: '66642',
      productSpecs: [],
      initialReviews: [],
      metaData: {},
      productStyles: {},
      relatedProducts: []
    }
  }

  componentDidMount = () => {
    this.getProducts();
    this.getAllData();
  }


  getAllData = () => {
    this.getProductInfo();
    this.getInitialReviews();
    this.getMetaData();
    this.getProductStyles();
    this.getRelatedProducts();
  }

  getProducts = () => {
    axios.get('/products')
    .then(res => {
      this.setState({
        products: res.data,
        currentProduct: res.data[0]['id']
      })
    })
    .catch(err => {console.log(err)})
  }

  getProductInfo = () => {
    axios.get(`products/${this.state.currentProduct}`)
      .then(res => {
        this.setState({
          productSpecs: res.data,
        })
      })
      .catch(err => {console.log(err)})

  }

  getInitialReviews = () => {
    let params = {product_id: this.state.currentProduct, page: 1}
    axios.get('/reviews', {params})
    .then(res => {this.setState({
      initialReviews: res.data
    })})
    .catch(err => {console.log(err)})
  }

  getMetaData = () => {
    let params = {product_id: this.state.currentProduct}
    axios.get('/reviews/meta', {params})
    .then(res => {this.setState({
      metaData: res.data
    })})
    .catch(err => {console.log(err)})
  }

  getProductStyles = () => {
    axios.get(`products/${this.state.currentProduct}/styles`)
      .then(res => {
        this.setState({
          productStyles: res.data,
        })
      })
      .catch(err => {console.log(err)})

  }

  getRelatedProducts = () => {
    axios.get(`products/${this.state.currentProduct}/related`)
      .then(res => {
        this.setState({
          relatedProducts: res.data,
        })
      })
      .catch(err => {console.log(err)})

  }


  onChange = (event) => {
    this.setState({
      currentProduct: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input
        type="text"
        placeholder='Search by Product_id'
        maxLength='5'
        value= {this.state.currentProduct}
        onChange = {this.onChange}
        />
        <button onClick={this.getAllData} >Submit</button>
        <ProdOverview
          currentProduct= {this.state.currentProduct}
          products={this.state.products}
          productSpecs={this.state.productSpecs}
          productStyles={this.state.productStyles}
        />
        <Ratings
          currentProduct= {this.state.currentProduct}
          initialReviews = {this.state.initialReviews}
          metaData = {this.state.metaData}
        />
        <Related
          currentProduct= {this.state.currentProduct}
          productStyles={this.state.productStyles}
          relatedProducts = {this.state.relatedProducts}
        />
      </div>
    )
  }
 }

 const root = document.createElement("div");
 root.setAttribute("id", "root");
 document.body.appendChild(root);

render(<App />, root);