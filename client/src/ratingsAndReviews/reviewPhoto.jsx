
import React from 'react';

class ReviewPhoto extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  }

  handleModal = (event) => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render(){

    if(this.state.modal){
      var modal = <dialog open onClick = {this.handleModal}>
      <img src = {this.props.url}/>
      </dialog>
    } else {
      var modal = ''
    }

    return(
      <div>
        <img src = {this.props.url} onClick = {this.handleModal}
        style={{resizeMode: "center", height: 75, width: 75}}/>
        {modal}
      </div>
    )
  }
}

 export default ReviewPhoto;