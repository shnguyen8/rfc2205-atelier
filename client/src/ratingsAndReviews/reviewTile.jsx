import React, {useState} from 'react'
import StarRating from './starRating.jsx'
// import CheckIcon from '@mui/icons-material/Check';
import {formatDate, displayThumbnails} from './helpers.jsx'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


class ReviewTile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      helpful: false,
      report: false,
      modal: false,
    }
  }

  onHelpfulClick = () => {
    axios.put(`reviews/${this.props.review.review_id}/helpful`)
      .then(() => {
        this.setState({
          helpful: true
        })
      })
      .catch(() => {console.log('could not report')})
  }

  onReportClick = () => {
    axios.put(`reviews/${this.props.review.review_id}/report`)
      .then(() => {
        this.setState({
          report: true
        })
      })
      .catch(() => {console.log('could not report')})
  }

  checkLength = (textBody) => {
    if(textBody.length <= 250){
      return <span>{textBody}</span>
    } else {
      return (
        <span id = {this.props.review.review_id}>
        <p id = {this.props.review.review_id + 'text'}>
        {textBody.slice(0,250)} ... <button className ='show-more-review' onClick = {() => this.showMore(textBody)}> Show more</button>
        </p>
        </span>
      )
    }
  }

  showMore = (textBody) => {
    let fullText = document.createElement('p');
    let text = document.createTextNode(textBody);
    let shorterText = document.getElementById(this.props.review.review_id + 'text')
    fullText.appendChild(text);
    shorterText.remove();
    document.getElementById(this.props.review.review_id).appendChild(fullText);
  }

  render() {
    return(
      <div className = 'reviewTile'>

        <div className = 'reviewTileHeader'>
        <span>{StarRating(this.props.review.rating)}</span>
        <span><i>{this.props.review.reviewer_name}</i> {formatDate(this.props.review.date)}</span>
        </div>

        <div className = 'reviewTileSummary'>
        {this.props.review.summary}
        </div>

        <div className = 'reviewTileBody'>
        {this.checkLength(this.props.review.body)}
        <br/>
        {this.props.review.response ? <span className = 'response'> <b>Response from seller: </b> {this.props.review.response}<br/></span>  : <React.Fragment/> }
        {this.props.review.recommend ? <p><CheckCircleOutlineOutlinedIcon/> I recommend this product </p> : <p></p> }
        </div>

        <div className = 'reviewTileThumbnails'>
        {displayThumbnails(this.props.review.photos)}
        </div>

        <div className = 'reviewTileFooter'>
        Helpful? {!this.state.helpful? <span className = 'show-more-review' onClick = {this.onHelpfulClick}> Yes ({this.props.review.helpfulness}) </span> : <span><b> <u> Yes </u> {this.props.review.helpfulness + 1} </b> </span>} | {!this.state.report? <span className = 'show-more-review' onClick = {this.onReportClick}> Report </span> : <span><b> <u> Reported </u></b> </span>}
        </div>

      </div>
    )
  }


}

export default ReviewTile;