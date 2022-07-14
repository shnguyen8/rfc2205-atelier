import React from 'react';
import { useEffect, useState } from 'react';


const ImageGallery = (props) => {
  // console.log(props);

  if (props.thumbnailClicked !== '' && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url !== null) {
    return (
      <React.Fragment>
        <img
          src={props.thumbnailClicked}
        />

      </React.Fragment>

    )
  } else if (props.productStyles.results !== undefined && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url !== null) {
    return (
      <React.Fragment>
        <img
          src={props.productStyles.results[0].photos[0].thumbnail_url}
          title='Product Picture'
        />
      </React.Fragment>
    )
  }
}

export default ImageGallery;