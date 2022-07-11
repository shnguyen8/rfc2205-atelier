import React from 'react';
import reactDOM from 'react-dom';

class RatingBreakdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product_id: props.metaData.product_id,
      characteristics: props.metaData.characteristics,
      ratings: props.metaData.ratings,
      reccomended: props.metaData.reccomended
    }
  }

  avgRating = (ratingsObj) => {

  }

  render(){
    return(
      <div>
      <p> Ratings & Reviews </p>
      {this.avgRating(this.state.ratings)}
      </div>
    )
  }

}

export default RatingBreakdown;