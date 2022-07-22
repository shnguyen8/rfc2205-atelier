import React from 'react';
import { useEffect, useState } from 'react';
import Flexbox from 'flexbox-react';
import { Carousel } from 'react-bootstrap';

const ImageGallery = (props) => {

  let stylePhotosArr = [];
  let selectStylePhotos = (props) => {
    for (var i = 0; i < props.productStyles.results.length; i++) {
      if (Number(props.thumbStyle) === props.productStyles.results[i].style_id) {
        for (var j = 0; j < props.productStyles.results[i].photos.length; j++) {
          if (j < 7) {
            stylePhotosArr.push(props.productStyles.results[i].photos[j])
          }
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
      <div className="imagegallery">
        <div className="primary-image">
          <Carousel interval={null}>
            {stylePhotosArr.map((stylePhotos, j) => {
              return  <Carousel.Item><img
                                      onClick={props.onStylePhotosClick}
                                      key={j}
                                      src={stylePhotos.thumbnail_url}
                                      style={{
                                        resizeMode: "center",
                                        height: 490,
                                        width: 350,
                                      }}
                                      /></Carousel.Item>
            })}
          </Carousel>
        </div>
        <div className='flexbox-item inner-image'>
          {stylePhotosArr.map((stylePhotos, j) => {
            if (j < 7) {
              return  <img
                      onClick={props.onStylePhotosClick}
                      className='inner-images'
                      key={j}
                      src={stylePhotos.thumbnail_url}
                      style={{
                        resizeMode: "center",
                        height: 75,
                        width: 75,
                        border: '2px solid black',
                        borderRadius: '0%',
                      }}
                      />
            }
          })}
        </div>
      </div>
    )
  } else if (props.productStyles.results !== undefined && props.productStyles.results.length !== 0 && props.productStyles.results[0].photos[0].thumbnail_url !== null) {
    return (
      <div className="imagegallery">
        <div className="primary-image">
          <Carousel interval={null}>
            {props.productStyles.results[0].photos.map((stylePhotosObjs, j) => {
              return <Carousel.Item><img
                                    onClick={props.onStylePhotosClick}
                                    style_id={props.productStyles.results[0].style_id}
                                    key={j}
                                    src={stylePhotosObjs.thumbnail_url}
                                    style={{
                                      resizeMode: "center",
                                      height: 490,
                                      width: 350,
                                    }}
                                    /></Carousel.Item>
              })}
          </Carousel>
        </div>
        <span className='flexbox-item inner-image'>
          {props.productStyles.results[0].photos.map((stylePhotosObjs, j) => {
            if (j < 7) {
              return <img
                      onClick={props.onStylePhotosClick}
                      style_id={props.productStyles.results[0].style_id}
                      className='inner-images'
                      key={j}
                      src={stylePhotosObjs.thumbnail_url}
                      style={{
                        resizeMode: "center",
                        height: 75,
                        width: 75,
                        border: '2px solid black',
                        borderRadius: '0%',
                      }}
                      />
            }
          })}
        </span>
      </div>
    )
  }
}

export default ImageGallery;