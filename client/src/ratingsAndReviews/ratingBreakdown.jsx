import React from 'react';
import reactDOM from 'react-dom';
import StarRating from './starRating.jsx';
import {ratingSummary, avgRating, numberOfRatings, percentRecommend} from './helpers.jsx';

const RatingBreakdown = ({metaData}) => {

  return(
      <div>

      <p> Ratings & Reviews </p>

      {avgRating(metaData.ratings)}
      {StarRating(avgRating(metaData.ratings))}

      <br></br>

      {numberOfRatings(metaData.ratings)} total reviews
      <br></br>

      {percentRecommend(metaData.recommended)}% of reviews recommend this product
      <br></br>

      {ratingSummary(metaData.ratings)}

      </div>
    )
}


export default RatingBreakdown;