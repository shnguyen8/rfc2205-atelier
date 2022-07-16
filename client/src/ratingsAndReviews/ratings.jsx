import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';
import starRating from './starRating.jsx'
import ReviewsList from './reviewsList.jsx'
import {avgRating, numberOfRatings, percentRecommend} from './helpers.jsx'
import AddReviewForm from './addReviewForm.jsx'
import Modal from '@mui/material/Modal';
import StarRating from './starRating.jsx';
import FilterStars from './filterStars.jsx'

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

  setFilter = (filter) => {
    var changedFilters = this.state.filters;
    changedFilters[filter] = !changedFilters[filter];
    var anyFilters = Object.values(changedFilters).includes(true);
    this.setState({
      filters: changedFilters,
      filtersOn: anyFilters
    })
  }

  removeAllFilters = (event) => {
    var allFalse = {
        5: false,
        4: false,
        3: false,
        2: false,
        1: false,
    }
    this.setState({
      filters: allFalse,
      filtersOn: false
    })
  }

  ratingSummary = (ratingsObj) => {
    if(ratingsObj === undefined){
      return null
    }
    let total = numberOfRatings(ratingsObj);
    let findValue = (property) => {
      let percent = Number(ratingsObj[property]) || 0
      return Math.floor(percent / total * 100) || 0
    }
    let five = findValue(5)
    let four = findValue(4)
    let three = findValue(3)
    let two = findValue(2)
    let one = findValue(1)

    return (
      <React.Fragment>
      <FilterStars percent = {five} stars = {5} setFilter = {this.setFilter} filterOn = {this.state.filters[5]}/>
      <FilterStars percent = {four} stars = {4} setFilter = {this.setFilter} filterOn = {this.state.filters[4]}/>
      <FilterStars percent = {three} stars = {3} setFilter = {this.setFilter} filterOn = {this.state.filters[3]}/>
      <FilterStars percent = {two} stars = {2} setFilter = {this.setFilter} filterOn = {this.state.filters[2]}/>
      <FilterStars percent = {one} stars = {1} setFilter = {this.setFilter} filterOn = {this.state.filters[1]}/>
      </React.Fragment>
    )
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
      var removeFilters = <button onClick = {this.removeAllFilters}>Remove all filters</button>
    } else {
      var removeFilters = <React.Fragment></React.Fragment>
    }

      return (
      <div>

      <div name = 'ratingBreakdowns'>
      <p> Ratings & Reviews </p>
      {avgRating(this.props.metaData.ratings)}
      {StarRating(avgRating(this.props.metaData.ratings))}
      <br></br>
      {numberOfRatings(this.props.metaData.ratings)} total reviews
      <br></br>
      {percentRecommend(this.props.metaData.recommended)}% of reviews recommend this product
      <br></br>
      {this.ratingSummary(this.props.metaData.ratings)}
      {removeFilters}
      </div>

      <ReviewsList filters = {this.state.filters} currentProduct = {this.props.currentProduct} totalReviews = {numberOfRatings(this.props.metaData.ratings)} filtersOn = {this.state.filtersOn}/>

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
