import React from 'react';
import reactDOM from 'react-dom';

class RatingBreakdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  avgRating = (ratingsObj) => {
    let totalScore = 0;
    let ratings = this.numberOfRatings(ratingsObj);
    for (var key in ratingsObj) {
      let score = Number(ratingsObj[key]) * Number(key);
      totalScore += score ;
    }
    let avg = totalScore / ratings;
    avg = Math.round(avg * 10) / 10;
    return avg;
  }

  numberOfRatings = (ratingsObj) => {
    let total = 0;
    for(var key in ratingsObj){
      let number = Number(ratingsObj[key])
      total += number
    }
    return total;
  }

  numberOfRatings = (ratingsObj) => {
    let total = 0;
    for(var key in ratingsObj){
      let number = Number(ratingsObj[key])
      total += number
    }
    return total;
  }

  percentRecommend = (recObj) => {
    if(recObj){
      let totalTrue = Number(recObj['true']) || 0;
      let totalFalse = Number(recObj.false) || 0;
      let percent = totalTrue / (totalTrue + totalFalse) * 100 || 0;
      return Math.floor(percent)
    } else {
      return null;
    }
  }

  render(){
    return(
      <div>
      <p> Ratings & Reviews </p>
      {this.avgRating(this.props.metaData.ratings)}
      STARS HERE
      <br></br>
      {this.numberOfRatings(this.props.metaData.ratings)} total reviews
      <br></br>
      {this.percentRecommend(this.props.metaData.recommended)}% of reviews recommend this product
      </div>
    )
  }

}

export default RatingBreakdown;