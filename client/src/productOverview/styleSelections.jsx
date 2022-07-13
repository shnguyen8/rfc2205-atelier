import React from 'react';
import StyleSelectionHelper from './styleSelectionHelper.jsx';

class StyleSelections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }




  render() {
    return (
      <React.Fragment>
        <StyleSelectionHelper
          currentProduct= {this.props.currentProduct}
          products={this.props.products}
          productSpecs={this.props.productSpecs}
          productStyles={this.props.productStyles}
        />
      </React.Fragment>

    )
  }
}

export default StyleSelections;



  // getStylePhotos = () => {
  //   this.props.productStyles.results.map((styleVals) => {
  //     return <iframe src={styleVals.photos[0].thumbnail_url} />;
  //   })
  //   // console.log(props)
  // }

  // onClickfunc = (e) => {
  //   this.getStylePhotos();
  // }