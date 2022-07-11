import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';
import RatingBreakdown from './ratingBreakdown.jsx'


class Ratings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      allReviews: {},
      displayedReviews: [],
      metaData: {}, //only once
      showReviewForm: false,
      nextPage: 1,
    }
  }

  componentWillMount = () => {
    this.setState({
      product_id: this.props.product_id
    })
    this.getReviewData({'product_id': this.state.product_id, 'page': this.state.nextPage})
    this.getMetaData({'product_id': this.state.product_id})
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