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
      currentProduct: '',
      search: ''
    }
  }

  componentDidMount = () => {
    this.getProducts();
  }

  getProducts = () => {
    // console.log('getProducts ran')
    axios.get('/products')
      .then(res => {
        console.log(res.data);
        this.setState({
          products: res.data,
          currentProduct: res.data[0]['id']
        })
      })
      .catch(err => { console.log(err) })
  }

  onClick = (event) => {
    this.setState({
      currentProduct: this.state.search
    })
  }

  onChange = (event) => {
    this.setState({
      search: event.target.value
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
        <button onClick={this.onClick}>Submit</button>

        <ProdOverview product_id={this.state.currentProduct} />
        <Ratings product_id={this.state.currentProduct} />
        <Related product_id={this.state.currentProduct} />
      </div>
    )
  }
}

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

render(<App />, root);