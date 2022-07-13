import React from 'react';

const ImageGallery = (props) => {
  // console.log(props.products);


  // let getStylePhotos = (props) => {
  //   props.productStyles.results.map((styleVals) => {
  //     styleVals.photos.map((photoObjs) => {
  //       console.log(photoObjs.thumbnail_url)
  //     })
  //   })
  // }

  // let onClickfunc = (e) => {
  //   getStylePhotos(props);
  // }

  if (props.productStyles.results !== undefined && props.productStyles.results[0].photos[0].thumbnail_url !== null) {
    return (
      <React.Fragment>
        {/* {props.productStyles.results[0].photos[0].thumbnail_url.map((styleVals, i) => {
          if (styleVals.photos[0].thumbnail_url !== null) {
            return <img key={i} src={styleVals.photos[0].thumbnail_url} />
          }
        })} */}
        <iframe
          src={props.productStyles.results[0].photos[0].thumbnail_url}
          height='450px'
          width='300px'
          title='Product Picture'
        />
      </React.Fragment>

    )
  }
}

export default ImageGallery;