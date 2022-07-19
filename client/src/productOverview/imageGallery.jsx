import React from 'react';
import { useEffect, useState } from 'react';
import Flexbox from 'flexbox-react';
import { Carousel } from 'react-bootstrap';

const ImageGallery = (props) => {
  // console.log(props);

  let stylePhotosArr = [];
  let selectStylePhotos = (props) => {
    for (var i = 0; i < props.productStyles.results.length; i++) {
      // console.log(props.thumbStyle)
      // console.log(Number(props.thumbStyle) === props.productStyles.results[i].style_id)
      if (Number(props.thumbStyle) === props.productStyles.results[i].style_id) {
        for (var j = 0; j < props.productStyles.results[i].photos.length; j++) {
          stylePhotosArr.push(props.productStyles.results[i].photos[j])
          // console.log(stylePhotosArr)
        }
      } else {
        continue;
      }
      break;
    }
  }

  if (props.thumbnailClicked !== '' && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url !== null) {
    {selectStylePhotos(props)}
    return (
      <div className='imagegallery'>
          <div className='flexbox-item primary-image'>
          <img
            src={props.thumbnailClicked}
          />
          </div>

        <div className='flexbox-item inner-image'>
        <Carousel variant={"dark"} interval={null} indicators={false} >
          {stylePhotosArr.map((stylePhotos, j) => {
            return <Carousel.Item><img
                    onClick={props.onStylePhotosClick}
                    className='inner-images'
                    key={j}
                    src={stylePhotos.thumbnail_url}
                    style={{
                      resizeMode: "center",
                      height: 75,
                      width: 75,
                      border: '2px solid grey',
                      borderRadius: '0%',
                    }}
                  /></Carousel.Item>
          })}
          </Carousel>
        </div>
        </div>
    )
  } else if (props.productStyles.results !== undefined && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url !== null) {
    return (
        <div className='imagegallery'>
          <div className='flexbox-item primary-image'>
          <img
            src={props.productStyles.results[0].photos[0].thumbnail_url}
            title='Product Picture'
          />
          </div>

        <span className='flexbox-item inner-image'>
        <Carousel variant={"dark"} interval={null} indicators={false} >

          {props.productStyles.results[0].photos.map((stylePhotosObjs, j) => {
            return <Carousel.Item><img
                    onClick={props.onStylePhotosClick}
                    style_id={props.productStyles.results[0].style_id}
                    className='inner-images'
                    key={j}
                    src={stylePhotosObjs.thumbnail_url}
                    style={{
                      resizeMode: "center",
                      height: 75,
                      width: 75,
                      border: '2px solid grey',
                      borderRadius: '0%',
                    }}
                  /></Carousel.Item>
          })}

        </Carousel>
        </span>

        </div>
    )
  } else if (props.productStyles.results !== undefined && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url === null) {
    return (
      <div className='imagegallery'>
        <div className='flexbox-item primary-image'>
          <img
            src={"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"}
            width= '300'
            height= '400'
          />
        </div>
        <span className='flexbox-item inner-image'>
          <img
          src={"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"}
          className='inner-images'
          style={{
            resizeMode: "center",
            height: 75,
            width: 75,
            border: '2px solid grey',
            borderRadius: '0%',
          }}
          />
        </span>
      </div>
    )
  }
}

export default ImageGallery;