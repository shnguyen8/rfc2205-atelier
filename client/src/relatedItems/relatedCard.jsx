import React, { Component, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import RelatedList from './relatedList.jsx';
import StarRating from "./../ratingsAndReviews/starRating.jsx";
import { avgRating } from "./../ratingsAndReviews/helpers.jsx";


function RelatedCard(props, { relatedStylesInfo, relatedProductsInfo, onClick }) {


  let { name, category, rating, image } = props;
  return (

          <Card border="dark" style={{ width: '16rem' }}>

            <div>

              <Button variant="outline--*" className="block"
              btnindex={props.btnindex}  size="sm" style={{ display: 'flex', justifyContent: 'flex-end' }} onClick={(e) => props.onClick()}> ⭐️ </Button>


              <Card.Img src={props.image ? props.image : 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'} width="100%" height="150vw" ></Card.Img>
              <Card.Body>
                <Card.Title className="flex-center" >
                  <div className="flex-center" className="text-no-wrap" >
                    {props.name}
                  </div>
                </Card.Title>

                <Card.Text>
                  <div className="flex-center" >{props.category}</div>
                  <div className="flex-center" >${props.price}</div>
                  {
                    props.rating ?
                      (<div className="flex-center" >{StarRating(avgRating(props.rating))}</div>) :
                      <div>rating is loading...</div>
                  }
                </Card.Text>

              </Card.Body>
            </div>

          </Card>

  );
}

export default RelatedCard