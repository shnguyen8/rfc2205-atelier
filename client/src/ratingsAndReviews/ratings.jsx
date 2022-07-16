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
      filters: {
        5: false,
        4: false,
        3: false,
        2: false,
        1: false,
      },
      filtersOn: false
    }
  }

  handleAddModal = (event) => {
    this.setState({
      addReviewModal: !this.state.addReviewModal
    })
  }

  filterReviews = (filter) => {
    var changedFilters = this.state.filters;
    changedFilters[filter] = !changedFilters[filter];
    var anyFilters = Object.values(changedFilters).contains(true);
    this.setState({
      filters: changedFilters,
      filtersOn: anyFilters
    })
  }

  render() {

    if(this.state.addReviewModal){
      var addModal = <dialog open onClick = {this.handlePhotoModal}>
      <AddReviewForm currentProduct = {this.props.currentProduct} handleAddModal = {this.handleAddModal} productName = {this.props.productName} characteristics = {this.props.metaData.characteristics}/>
      </dialog>
    } else {
      var addModal = ''
    }

    if(this.state.filtersOn){
      var removeFilters = <button>Remove all filters</button>
    } else {
      var removeFilters = <React.Fragment></React.Fragment>
    }

      return (
      <div>

      <RatingBreakdown metaData = {this.props.metaData} filters = {this.state.filters} filterReviews = {this.filterReview}/>

      {removeFilters}

      <ReviewsList currentProduct = {this.props.currentProduct} totalReviews = {numberOfRatings(this.props.metaData.ratings)}/>

      <button onClick={this.handleAddModal}>Add A Review +</button>
      {addModal}

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
