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
    }
  }

  render () {
    return (
      <div>

      <RatingBreakdown metaData = {this.props.metaData}/>
      <ReviewsList currentProduct = {this.props.currentProduct} totalReviews = {numberOfRatings(this.props.metaData.ratings)}/>

      </div>

    )
  }

 }


export default Ratings;