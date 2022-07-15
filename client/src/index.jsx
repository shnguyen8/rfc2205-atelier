import { createRoot } from 'react-dom/client';
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
      allProducts: [],
      productStyles: {},
    }
  }

  componentDidMount = () => {
    this.getMetaData();
    this.getAllDataPromise();
  }


  getAllData = () => {
    this.getAllDataPromise();
    this.getMetaData();
  }

  getAllDataPromise = async () => {
    let params = { product_id: this.state.currentProduct, page: 1 }
    await Promise.all([
      axios.get('/products'),
      axios.get(`/products/${this.state.currentProduct}`),
      axios.get('/reviews', { params }),
      axios.get(`/products/${this.state.currentProduct}/styles`),
      axios.get("/products/?count=5000"),
    ])
      .then((res) => {
        // console.log(res)
        this.setState({
          products: res[0].data,
          productSpecs: res[1].data,
          initialReviews: res[2].data,
          productStyles: res[3].data,
          allProducts: res[4].data,
        })
      })
  }

  getMetaData = () => {
    let params = { product_id: this.state.currentProduct }
    axios.get('/reviews/meta', { params })
      .then(res => {
        this.setState({
          metaData: res.data
        })
      })
      .catch(err => { console.log(err) })
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
          value={this.state.search}
          onChange={this.onChange}
        />
        <button onClick={this.getAllData} >Submit</button>
        <ProdOverview
          currentProduct = {this.state.currentProduct}
          products = {this.state.products}
          productSpecs = {this.state.productSpecs}
        />
        <Ratings
          currentProduct={this.state.currentProduct}
          initialReviews={this.state.initialReviews}
          metaData={this.state.metaData}
        />
        <Related
          currentProduct={this.state.currentProduct}
          allProducts={this.state.allProducts}
        />
      </div>
    )
  }
}

const root1 = document.createElement("div");
root1.setAttribute("id", "app");
document.body.appendChild(root1);
const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />)

export default App;