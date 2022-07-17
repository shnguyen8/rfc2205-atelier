import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function OutfitCard(props, { relatedStylesInfo, relatedProductsInfo, outfitCardsArray, onClick}) {

  const {productName, productCategory } = props;

  return (
    <Card border="dark" style={{ width: '18rem' }}>

      <div>


          <Button variant="outline-*" size="sm" style={{display: 'flex', justifyContent: 'right'}}> -------------------------------------❌ </Button>


        <Card.Img src={'https://www.nicepng.com/png/detail/251-2519428_0-add-icon-white-png.png'}>
        </Card.Img>

        <Card.Body>
          <Card.Title>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              {props.productName}
            </div>
          </Card.Title>

          <Card.Text>
            <div style={{ display: 'flex', justifyContent: 'center' }} >{props.productCategory}</div>
            <div style={{ display: 'flex', justifyContent: 'center' }} >PRICE</div>
            <div style={{ display: 'flex', justifyContent: 'center' }} >RATING</div>
          </Card.Text>

        </Card.Body>
      </div>

    </Card>
  );
}

export default OutfitCard