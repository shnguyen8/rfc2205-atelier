import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';
import RatingBreakdown from './ratingBreakdown.jsx'


class Ratings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProduct: this.props.currentProduct,
      allReviews: this.props.initialReviews.results,
      displayedReviews: [],
      metaData: this.props.metaData,
      showReviewForm: false,
      nextPage: 2,
    }
  }


  render () {
    return (
      <div>

      <RatingBreakdown metaData = {this.props.metaData}/>


      </div>

    )
  }

 }


export default Ratings;