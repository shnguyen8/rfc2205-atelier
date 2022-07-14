import React from 'react'
import axios from 'axios'
import ReviewTile from './reviewTile.jsx'



class ReviewsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nextPage: 1,
      count: 2,
      sort: 'relevant',
      reviews: [],
      lastCall: ''
    }
  }

  componentDidMount = () => {
    this.getReviews()
  }

  componentDidUpdate = () => {
    if(this.props.product_id !== this.state.lastCall){
      var params = {
        product_id: this.props.currentProduct,
        page: 1,
        count: 2,
        sort: 'relevant'
      }
      axios.get('/reviews', {params})
      .then(res => {
        var resData = res.data.results
        var updateReviews = [];
        resData.forEach((data) => {updateReviews.push(data)})
        this.setState({
        reviews: updateReviews,
        nextPage: 2,
        lastCall: this.props.currentProduct,
        count: 2,
        sort: 'relevant'
      })
    })
    .catch(err => {console.log('error in get reviews',err)})
    }
  }

  getReviews = () => {

    var params = {
      product_id: this.props.currentProduct,
      page: this.state.nextPage,
      count: this.state.count,
      sort: this.state.sort
    }
    axios.get('/reviews', {params})
    .then(res => {
      var resData = res.data.results
      var updateReviews = this.state.reviews;
      var updatePage = this.state.nextPage + 1;
      resData.forEach((data) => {updateReviews.push(data)})
      this.setState({
      reviews: updateReviews,
      nextPage: updatePage,
      lastCall: this.props.currentProduct
      })
    })
    .catch(err => {console.log('error in get reviews',err)})
  }

  moreReviewsButton = () => {
    if(this.state.reviews.length < this.props.totalReviews){
      return <button onClick = {this.getReviews}>More Reviews</button>
    } else {
      return null
    }
  }

  render () {

    return (
      <div>
        Sorted by {this.state.sort}

        {this.state.reviews.map(review => {return <ReviewTile review = {review} key = {review.review_id} />})}
        {this.moreReviewsButton()}

        <button>Add A Review +</button>

      </div>
    )
  }

 }


export default ReviewsList;