import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';
import RatingBreakdown from './ratingBreakdown.jsx'


class Ratings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productID: 66642, //need this to get passed in from somewhere, potentiall more if there's more to return?
      allReviews: {},
      displayedReviews: [],
      metaData: {}, //only once
      showReviewForm: false,
      nextPage: 1,
    }
  }

  componentDidMount = () => {
    this.getReviewData({'product_id': this.state.productID, 'page': this.state.nextPage})
    this.getMetaData({'product_id': this.state.productID})
  }

  getReviewData = (params) => {
    axios.get('/reviews/', {params})
    .then((res) => {
      let reviews = this.state.allReviews
      reviews[res.data.page] = res.data.results
      let next = this.state.nextPage + 1;
      this.setState({
        allReviews: reviews,
        nextPage: next
      })
    })
    .catch((err) => {console.log(err)})
  }

  getMetaData = (params) => {
    axios.get('/reviews/meta', {params})
    .then((data) => {
      this.setState({
        metaData: data.data
      })
    })
    .catch((err) => {console.log(err)})
  }

  render () {
    return (
      <div>

      <RatingBreakdown metaData = {this.state.metaData}/>

      </div>

    )
  }

 }

 export default Ratings;