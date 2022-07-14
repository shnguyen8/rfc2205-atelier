import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';
import RatingBreakdown from './ratingBreakdown.jsx'
import starRating from './starRating.jsx'
import ReviewsList from './reviewsList.jsx'
import {ratingSummary, avgRating, numberOfRatings, percentRecommend} from './helpers.jsx'


class Ratings extends React.Component {



    render() {
      return (
      <div>

      <RatingBreakdown metaData = {this.props.metaData}/>
      <ReviewsList product_id = {this.props.metaData.product_id} currentProduct = {this.props.currentProduct} totalReviews = {numberOfRatings(metaData.ratings)}/>

      </div>
      )
    }
 }


export default Ratings;