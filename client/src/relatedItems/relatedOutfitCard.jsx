import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./../assets/styles.css"
import StarRating from "./../ratingsAndReviews/starRating.jsx";
import {avgRating} from"./../ratingsAndReviews/helpers.jsx";


function OutfitCard(props, {productStyles, relatedStylesInfo, relatedProductsInfo, outfitCardsArray, onClick}) {

  const {productName, productCategory, productImage, productPrice} = props;

  return (
    <Card border="dark" style={{ width: '16rem' }}>

      <div>


          <Button variant="outline--*" className="block" size="sm" style={{ display: 'flex', justifyContent: 'flex-end' }} > ❎ </Button>


        <Card.Img width="150" height="150" src={props.productImage} ></Card.Img>

        <Card.Body>
          <Card.Title>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              {props.productName}
            </div>
          </Card.Title>

          <Card.Text className="font-styles">
            <div className="flex-center">{props.productCategory}</div>
            <div className="flex-center">${props.productPrice}</div>
            {
              props.productRating ?
              (<div className="flex-center">{StarRating(avgRating(props.productRating))}</div>) :
              <div>rating is loading...</div>
            }
          </Card.Text>

        </Card.Body>
      </div>

    </Card>
  );
}

export default OutfitCard