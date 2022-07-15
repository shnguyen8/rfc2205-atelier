import React from 'react'


class AddReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div styles = {formStyle}>
      <button onClick = {this.props.handleModal}> Close </button>
      </div>
    )
  }

}

const formStyle = {
    bgcolor: 'white',
}

export default AddReviewForm;