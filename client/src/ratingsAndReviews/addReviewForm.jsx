import React, {useState} from 'react'
import Rating from '@mui/material/Rating';

class AddReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stars: 0,
      summary: '',
      review: '',
      username: '',
      reccomend: '',
      characteristics: {}
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;
    this.setState({
      [name] : value
    })
  }

  handleAddReview = (event) => {
    event.preventDefault()
    let review = {
        "product_id": ,
        "rating": 3,
        "summary": "this is a review",
        "body": "this is a very long review for this product that i may or may not like, i am just trying to make this 50 characters long",
        "recommend": false,
        "name" : "testing",
        "email":"testing@gmail.com",
        "characteristics": {"223574": 5, "223572": 5, "223573": 5, "223575": 5}
      }

      // {
//   "product_id": 66642,
//   "rating": 3,
//   "summary": "this is a review",
//   "body": "this is a very long review for this product that i may or may not like, i am just trying to make this 50 characters long",
//   "recommend": false,
//   "name" : "testing",
//   "email":"testing@gmail.com",
//   "characteristics": {"223574": 5, "223572": 5, "223573": 5, "223575": 5}
// }

    //axios post request
      //then the below
    // this.props.handleAddModal()
  }

  starLabels = () => {
    const starLabels = ['Poor', 'Fair', 'Average', 'Good', 'Great']
    if(this.state.stars > 0) {
      return <React.Fragment>{starLabels[this.state.stars - 1]}</React.Fragment>
    } else {
      return <React.Fragment/>
    }
  }

  showRatings = (characteristic) => {
    console.log('ratings', characteristic)

    var ratings = {
      Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
      Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
      Quality: ['Poor', 'Below Average', 'What I expected', 'Pretty great', 'Perfect'],
      Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs Long']
    }

    var ratings = ratings[characteristic] || []

      return (
          <table>
        <tbody>
          <tr>
          <td><b>{characteristic} * : </b></td>

        {ratings.map(rating => {
          return <td><center><input key = {rating + ratings.indexOf(rating)} type = 'radio' value = {ratings.indexOf(rating) + 1} name = {characteristic} onClick = {this.handleInputChange}/><br/><label>{rating}</label></center></td>
        })}

          </tr>

       </tbody>
       </table>
      )

  }

  render(){

    if(this.props.characteristics) {
      var characteristics = Object.keys(this.props.characteristics)
    }

    if(this.state.review.length < 50 ){
      var counter = `Minimum required characters left: [${50 - this.state.review.length}]`
    } else if (this.state.review.length <= 1000 ){
      var counter = `Minimum reached`
    } else {
      var counter = 'Over maximum characters'
    }

    return(
      <div>
        <form>
          <h4>Write Your Review</h4>
          <h5>About the {this.props.productName}</h5>

          Overall Rating * :<Rating name = 'stars' value = {Number(this.state.stars)} onClick = {this.handleInputChange} getLabelText= {this.starLabels}/> {this.starLabels()}
          <br/>

          Do you recommend this product?* :
          <input type = 'radio' value = {true} name = "reccomend" onClick = {this.handleInputChange}/> Yes
          <input type = 'radio' value = {false} name = "reccomend" onClick = {this.handleInputChange}/> No
          <br/>

          {characteristics.map(characteristic => {return this.showRatings(characteristic)})}
          <br/>

          Review Summary (optional): <input type = 'text' value = {this.state.summary} placeholder = 'Best purchase ever!' name = 'summary' onChange = {this.handleInputChange} maxLength = '60'/>
          <br/>

          Full Review* : <input type = 'text' value = {this.state.review} placeholder = 'Why did you like the product or not?' name = 'review' onChange = {this.handleInputChange} minLength = '50' maxLength = '1000'/>
          {counter}
          <br/>

          <label for="file">Upload photos</label>
          <input type="file" id="file" name="file" multiple></input>
          <br/>

          Username*: <input type = 'text' value = {this.state.username} placeholder = 'Example: jackson11@email.com' name = 'username' onChange = {this.handleInputChange} maxLength = '60'/>
          <br/>
          For authentication reasons, you will not be emailed.
          <br/>


          <input type = "submit" value = "Submit Review" onClick = {this.handleAddReview}/>

        </form>
      <button onClick = {this.props.handleAddModal}> Close </button>
      </div>
    )
  }

}

export default AddReviewForm;


// {
//   "product_id": 66642,
//   "rating": 3,
//   "summary": "this is a review",
//   "body": "this is a very long review for this product that i may or may not like, i am just trying to make this 50 characters long",
//   "recommend": false,
//   "name" : "testing",
//   "email":"testing@gmail.com",
//   "characteristics": {"223574": 5, "223572": 5, "223573": 5, "223575": 5}
// }