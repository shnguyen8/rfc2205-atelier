
import React from 'react';


class ReviewPhoto extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  }

  handlePhotoModal = (event) => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render(){

    if(this.state.modal){
      var modal = <dialog open className = 'photo-modal' onClick = {this.handlePhotoModal}>
      <img className = 'photo-modal-contents' src = {this.props.url}/>
      </dialog>
    } else {
      var modal = <React.Fragment/>
    }

    return(
      <div>
        <img src = {this.props.url} onClick = {this.handlePhotoModal}
        style={{resizeMode: "center", height: 75, width: 75}}/>
        {modal}
      </div>
    )
  }
}

 export default ReviewPhoto;