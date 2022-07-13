import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';
import RatingBreakdown from './ratingBreakdown.jsx'
import starRating from './starRating.jsx'
import ReviewsList from './reviewsList.jsx'


class Ratings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayedReviews: [],
      nextPage: 2,
    }
  }


  render () {
    return (
      <div>

      <RatingBreakdown metaData = {this.props.metaData}/>
      <ReviewsList currentProduct = {this.props.currentProduct} />

      </div>

    )
  }

 }


export default Ratings;