import React from 'react'
import StarRating from './starRating.jsx'

class ReviewTile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        START REVIEW
      {this.props.review.date}
      {this.props.review.summary}
      {this.props.review.body}
      {/* {this.props.review.photos} */}
      {this.props.review.reviewer_name}
      {/* {this.props.review.helpfulness} */}
        END REVIEW
      </div>
    )
  }

//   Star Rating
// Month, DD, YYYY
// Review Summary (bold)
// Review Body
// (first 250 characters)
// Potentially up to 5 images
// Reviewer Name
// Response to Review
// Rating Helpfullness

}

export default ReviewTile;