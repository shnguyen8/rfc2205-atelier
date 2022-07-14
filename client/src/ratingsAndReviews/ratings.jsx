import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';
import RatingBreakdown from './ratingBreakdown.jsx'
import starRating from './starRating.jsx'
import ReviewsList from './reviewsList.jsx'
import {ratingSummary, avgRating, numberOfRatings, percentRecommend} from './helpers.jsx'


class Ratings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addReviewModal: false,
    }
  }

  toggleModal(){
    let toggle = !this.addReviewModal
    this.setState({
      addReviewModal: toggle
    })
  }

    render() {
      return (
      <div>

      <RatingBreakdown metaData = {this.props.metaData}/>

      <ReviewsList product_id = {this.props.metaData.product_id} currentProduct = {this.props.currentProduct} totalReviews = {numberOfRatings(this.props.metaData.ratings)} toggleModal = {this.toggleModal}/>

      </div>
      )
    }
 }


export default Ratings;