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
      allProducts: {},
      relatedStylesInfo: [],
    }
  }

  componentDidMount = () => {
    this.getMetaData();
    this.getAllDataPromise().then((res) => {
      this.setState({
        relatedProducts: res.d,
      })
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    const curState = this.state
    if (curState.relatedProducts.length > 0 && curState.relatedProducts != prevState.relatedProducts){
      // call get styles api endpoint
      this.getStylesByID(this.state.relatedProducts);
      // set state to response
    }
  }

  getAllData = () => {
    this.getAllDataPromise();
  }

  getAllDataPromise = async () => {
    let params = { product_id: this.state.currentProduct, page: 1 }
    await Promise.all([
      axios.get('/products'),
      axios.get(`/products/${this.state.currentProduct}`),
      axios.get('/reviews', { params }),
      axios.get(`/products/${this.state.currentProduct}/styles`),
      axios.get("/products/?count=5000"),
      axios.get(`/products/${this.state.currentProduct}/related`)
    ])
      .then((res) => {
        // console.log(res)
        this.setState({
          products: res[0].data,
          productSpecs: res[1].data,
          initialReviews: res[2].data,
          productStyles: res[3].data,
          allProducts: res[4].data,
          relatedProducts: res[5].data
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

  // axios.get(`products/${this.state.currentProduct}/related`)
  //     .then((res) => {this.getStylesByID(res.data)}),

  // getRelatedData = () => {
  //   axios.get(`products/${this.state.currentProduct}/related`)
  //     .then(res => {
  //       this.setState({
  //         relatedProducts: res.data
  //       })
  //     })
  //     .then(res => {

  //     })
  // }

  // async getRelatedData() {
  //   const [res] = await Promise.all([
  //   const releated = axios.get(`/products/${this.state.currentProduct}/related`).then(res => res.data)
  // ]);

  //   // const [res2] = await axios.get(`products/${res}/styles`)


  // }

// getRelatedData () {
//   const related = axios.get(`/products/${this.state.currentProduct}/related`).then(res => {console.log(res.data); return res.data})
// }




  getStylesByID = (arr) => {
    arr.forEach(id => {
      axios.get(`/products/${id}/styles`)
        .then(res => {
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
          relatedStylesInfo={this.state.relatedStylesInfo}
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