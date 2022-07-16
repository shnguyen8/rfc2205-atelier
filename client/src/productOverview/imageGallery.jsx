import React from 'react';
import { useEffect, useState } from 'react';
import Flexbox from 'flexbox-react';

const ImageGallery = (props) => {
  console.log(props);

  let selectStylePhotos = (props) => {

  }

  if (props.thumbnailClicked !== '' && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url !== null) {
    return (
      <div className='imagegallery'>
        <img
          src={props.thumbnailClicked}
        />
        {/* <img
          className='inner-image'
          src={props.thumbnailClicked}
          style={{
            resizeMode: "center",
            height: 75,
            width: 75,
            border: '2px solid grey',
            borderRadius: '0%'
          }}
        /> */}
      </div>
    )
  } else if (props.productStyles.results !== undefined && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url !== null) {
    return (
        // <Flexbox className='imagegallery'>
        //   <Flexbox className='primaryimage' element='img' src={props.productStyles.results[0].photos[0].thumbnail_url}></Flexbox>
        //   {props.productStyles.results[0].photos.map((stylePhotosObjs, j) => {
        //     return <Flexbox
        //             element='img'
        //             className='inner-image'
        //             key={j}
        //             src={stylePhotosObjs.thumbnail_url}
        //             />
        //   })}
        // </Flexbox>
        <div className='imagegallery'>
          <img
            className='primary-image'
            src={props.productStyles.results[0].photos[0].thumbnail_url}
            title='Product Picture'
          />
        <span className='inner-image'>
          {props.productStyles.results[0].photos.map((stylePhotosObjs, j) => {
            return <img
                    key={j}
                    src={stylePhotosObjs.thumbnail_url}
                    style={{
                      resizeMode: "center",
                      height: 75,
                      width: 75,
                      border: '2px solid grey',
                      borderRadius: '0%',
                    }}
                  />
          })}
        </span>
        </div>
    )
  } else if (props.productStyles.results !== undefined && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url === null) {
    return (
      <div>
        <img
          src={"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"}
          width= '300'
          height= '400'
        />
      </div>
    )
  }
}

export default ImageGallery;