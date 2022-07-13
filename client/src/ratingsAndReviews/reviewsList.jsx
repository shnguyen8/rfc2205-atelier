import React from 'react'
import axios from 'axios'
import ReviewTile from './reviewTile.jsx'

class ReviewsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      count: 2,
      sort: 'relevant',
      reviews: [],
    }
  }

  componentDidMount(){
    this.getReviews()
  }

  getReviews(){
    let params = {
      product_id: this.props.currentProduct,
      page: this.state.page,
      count: this.state.count,
      sort: this.state.sort
    };

    axios.get('/reviews', {params})
    .then(res => {
      let updateReviews = this.state.reviews.splice()
      let resData = res.data.results
      resData.forEach((data) => {updateReviews.push(data)})
      this.setState({
      reviews: updateReviews
    })})
    .catch(err => {console.log(err)})

  }

  render () {
    return (
      <div>
        Sorted by {this.state.sort}
        {this.state.reviews.map(review => {return <ReviewTile review = {review} key = {review.review_id} />})}
      </div>
    )
  }

 }


export default ReviewsList;