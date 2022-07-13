import React from 'react'
import axios from 'axios'
import ReviewTile from './reviewTile.jsx'



class ReviewsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastCall: '',
      page: 1,
      count: 2,
      sort: 'relevant',
      reviews: [],
    }
  }

  componentDidMount = () => {
    this.getReviews()
  }

  getReviews = () => {

    let params = {
      product_id: this.props.currentProduct,
      page: this.state.page,
      count: this.state.count,
      sort: this.state.sort
    };

    axios.get('/reviews', {params})
    .then(res => {
      let resData = res.data.results
      let updateReviews = this.state.reviews;
      resData.forEach((data) => {updateReviews.push(data)})
      this.setState({
      reviews: updateReviews,
      lastCall: currentProduct
    })})
    .catch(err => {console.log('error in get reviews',err)})

  }

  moreReviewsButton = () => {
    if(this.state.reviews.length < this.props.totalReviews){
      return <button onClick = {this.getMoreReviews}>More Reviews</button>
    } else {
      return null
    }
  }

  getMoreReviews = () => {
    let nextPage = this.state.page++
    this.setState({
      page: nextPage
    })
    this.getReviews();
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