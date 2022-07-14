import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';
import RatingBreakdown from './ratingBreakdown.jsx'
import starRating from './starRating.jsx'
import ReviewsList from './reviewsList.jsx'
import {ratingSummary, avgRating, numberOfRatings, percentRecommend} from './helpers.jsx'
import AddReviewForm from './addReviewForm.jsx'
import Modal from '@mui/material/Modal';

class Ratings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addReviewModal: false,
    }
  }

  handleModal = (event) => {
    this.setState({
      addReviewModal: !this.state.addReviewModal
    })
  }

  render() {
      return (
      <div>

      <RatingBreakdown metaData = {this.props.metaData}/>

      <ReviewsList product_id = {this.props.metaData.product_id} currentProduct = {this.props.currentProduct} totalReviews = {numberOfRatings(this.props.metaData.ratings)}/>

      <button onClick={this.handleModal}>Add A Review +</button>

      <Modal disableEnforceFocus open={this.state.addReviewModal} onClose={this.handleModal}>
      <div className = 'addReview' style = {modal}>
      <AddReviewForm handleModal = {this.handleModal}/>
      </div>
      </Modal>

      </div>

      )
    }
 }

 const modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default Ratings;
