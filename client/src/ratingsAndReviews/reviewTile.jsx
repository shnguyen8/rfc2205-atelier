import React from 'react'
import StarRating from './starRating.jsx'
import CheckIcon from '@mui/icons-material/Check';

class ReviewTile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div>
      {StarRating(this.props.review.rating)}
      {this.props.review.reviewer_name}, {this.props.review.date}
      <br></br>
      <b>{this.props.review.summary}</b>
      {this.props.review.body}
      <br></br>
      {this.props.review.recommend ? <p><CheckIcon/> I recommend this product </p> : <p></p> }
      {this.props.review.response ? <p> {this.props.review.response} </p> : <p></p> }
      Helpful? Yes({this.props.review.helpfulness}) | Report
      {/* {this.props.review.helpfulness} */}
      <br></br>
        END REVIEW
      </div>
    )
  }


}

export default ReviewTile;