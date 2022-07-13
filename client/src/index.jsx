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
      productStyles: {},
      relatedProducts: [],
      relatedStylesInfo: [],
      allProducts : {}
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
    this.getEveryProduct();
  }



  getProducts = () => {
    axios.get('/products')
      .then(res => {
        // console.log(res.data);
        this.setState({
          products: res.data,
          currentProduct: res.data[0]['id']
        })
        return res.data;
      })
      .catch(err => { console.log(err) })
  }


  getProductInfo = () => {
    axios.get(`/products/${this.state.currentProduct}`)
      .then(res => {
        this.setState({
          productSpecs: res.data,
        })
      })
      .catch(err => { console.log(err) })

  }

  getInitialReviews = () => {
    let params = { product_id: this.state.currentProduct, page: 1 }
    axios.get('/reviews', { params })
      .then(res => {
        this.setState({
          initialReviews: res.data
        })
      })
      .catch(err => { console.log(err) })
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

  getProductStyles = () => {
    axios.get(`products/${this.state.currentProduct}/styles`)
      .then(res => {
        this.setState({
          productStyles: res.data,
        })
      })
      .catch(err => { console.log(err) })

  }

  getRelatedProducts = () => {
    axios.get(`products/${this.state.currentProduct}/related`)
      .then(res => {
        this.setState({
          relatedProducts: res.data,
        })
      })
      .catch(err => { console.log(err) })

  }

  getEveryProduct = () => {
    axios.get("/products/?count=5000").then(res=>{
      this.setState({allProducts: res.data})
    })

  }

  getProductStylesById = (arr) => {
    // console.log(this.state.relatedProducts)
    console.log(arr)
    arr.forEach(id => {
      axios.get(`/products/${id}/styles`).then(res => {
        this.setState({ relatedStylesInfo: [...this.state.relatedStylesInfo, res.data] })
      })
    })

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
          currentProduct={this.state.currentProduct}
          products={this.state.products}
          productSpecs={this.state.productSpecs}
          productStyles={this.state.productStyles}
        />
        <Ratings
          currentProduct={this.state.currentProduct}
          initialReviews={this.state.initialReviews}
          metaData={this.state.metaData}
        />
        <Related
          currentProduct={this.state.currentProduct}
          relatedProducts={this.state.relatedProducts}
          allProducts={this.state.allProducts}
        />
      </div>
    )
  }
}

const root1 = document.createElement("div");
root1.setAttribute("id", "app");
document.body.appendChild(root1);

// render(<App />, root);

// function AppWithCB() {
//   useEffect(() => {
//     console.log('rendered')
//   });
//   return <App/>
// }

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />)

export default App;