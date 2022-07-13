import React from 'react';
import reactDOM from 'react-dom';
import Stars from './starRating.jsx';
import {ratingSummary, avgRating, numberOfRatings, percentRecommend} from './helpers.jsx';


class RatingBreakdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>

      <p> Ratings & Reviews </p>

      {avgRating(this.props.metaData.ratings)}
      {Stars(avgRating(this.props.metaData.ratings))}

      <br></br>

      {numberOfRatings(this.props.metaData.ratings)} total reviews
      <br></br>

      {percentRecommend(this.props.metaData.recommended)}% of reviews recommend this product
      <br></br>

      {ratingSummary(this.props.metaData.ratings)}

      </div>
    )
  }

}

export default RatingBreakdown;