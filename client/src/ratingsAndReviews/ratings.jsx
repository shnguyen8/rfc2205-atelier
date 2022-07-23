import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';
import starRating from './starRating.jsx'
import ReviewsList from './reviewsList.jsx'
import { avgRating, numberOfRatings, percentRecommend, charMapper } from './helpers.jsx'
import AddReviewForm from './addReviewForm.jsx'
import StarRating from './starRating.jsx';
import FilterStars from './filterStars.jsx'
import Button from 'react-bootstrap/Button';


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

  showFilters = () => {
    if (this.state.filtersOn === false) {
      return
    }
    var filters = []
    for (var key in this.state.filters) {
      if (this.state.filters[key] === true) {
        filters.push(key)
      }
    }
    var filters = filters.join(', ')
    return (
      <React.Fragment>Filters applied: {filters} <br></br> </React.Fragment>
    )

  }

  ratingSummary = (ratingsObj) => {
    if (ratingsObj === undefined) {
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
        <FilterStars percent={five} stars={5} setFilter={this.setFilter} filterOn={this.state.filters[5]} />
        <FilterStars percent={four} stars={4} setFilter={this.setFilter} filterOn={this.state.filters[4]} />
        <FilterStars percent={three} stars={3} setFilter={this.setFilter} filterOn={this.state.filters[3]} />
        <FilterStars percent={two} stars={2} setFilter={this.setFilter} filterOn={this.state.filters[2]} />
        <FilterStars percent={one} stars={1} setFilter={this.setFilter} filterOn={this.state.filters[1]} />
      </React.Fragment>
    )
  }

  render() {

    if (this.state.addReviewModal) {
      var addModal = <dialog className='addReviewModal' open onClick={this.handlePhotoModal}>
        <AddReviewForm currentProduct={this.props.currentProduct} handleAddModal={this.handleAddModal} productName={this.props.productName} characteristics={this.props.metaData.characteristics} />
      </dialog>
    } else {
      var addModal = <React.Fragment />
    }

    if (this.state.filtersOn) {
      var removeFilters = <Button variant='class="btn btn-outline-secondary' onClick={this.removeAllFilters}>Remove all filters</Button>
    } else {
      var removeFilters = <React.Fragment></React.Fragment>
    }


    return (
      <React.Fragment>

        {addModal}

        <div className='ratingBreakdowns'>

          <div className='rating-summary-container'>
            <div className='ratings-header'>
              <a id='Ratings and Reviews'>Ratings & Reviews</a>
            </div>
            <div className='average-summary'>{avgRating(this.props.metaData.ratings)}</div>
            <div className='star-summary'>{StarRating(avgRating(this.props.metaData.ratings))} </div>
            <div className='number-summary'>{numberOfRatings(this.props.metaData.ratings)} total reviews </div>
            <div className='recommend-summary'>{percentRecommend(this.props.metaData.recommended)}% of reviews recommend this product</div>
          </div>

          <div className='rating-star-distribution'>
            {this.ratingSummary(this.props.metaData.ratings)}
            <br></br>
            {this.showFilters()}
            {removeFilters}
          </div>

          <div className='characteristics-container'>
            {charMapper(this.props.metaData.characteristics)}
          </div>
        </div>

        <div className='reviews-list-container'>

          <ReviewsList filters={this.state.filters} currentProduct={this.props.metaData.product_id} totalReviews={numberOfRatings(this.props.metaData.ratings)} filtersOn={this.state.filtersOn} />
          &nbsp;
          <Button variant='class="btn btn-outline-secondary' onClick={this.handleAddModal}>Add A Review +</Button>


        </div>

      </React.Fragment>

    )
  }
}

export default Ratings;
