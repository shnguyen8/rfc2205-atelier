import React, {useState} from 'react'
import StarRating from './starRating.jsx'
import CheckIcon from '@mui/icons-material/Check';
import {formatDate} from './helpers.jsx'
import axios from 'axios';


class ReviewTile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      helpful: false,
      report: false
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
        {textBody.slice(0,250)} ... <button onClick = {() => this.showMore(textBody)}> Show more</button>
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
      <div>
      {StarRating(this.props.review.rating)}
      {this.props.review.reviewer_name}, {formatDate(this.props.review.date)}
      <br></br>
      <b>{this.props.review.summary}</b>
      <br></br>
      {this.checkLength(this.props.review.body)}
      <br></br>
      {this.props.review.recommend ? <p><CheckIcon/> I recommend this product </p> : <p></p> }
      {this.props.review.response ? <p> <b>Response from seller: </b> {this.props.review.response} </p> : <p></p> }
      Helpful? {!this.state.helpful? <span onClick = {this.onHelpfulClick}> <u> Yes </u> {this.props.review.helpfulness} </span> : <span><b> <u> Yes </u> {this.props.review.helpfulness + 1} </b> </span>}
      | {!this.state.report? <span onClick = {this.onReportClick}> <u> Report </u> </span> : <span><b> <u> Reported </u></b> </span>}
      <br></br>
        END REVIEW
      </div>
    )
  }


}

export default ReviewTile;