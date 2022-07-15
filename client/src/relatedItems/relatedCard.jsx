import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function RelatedCard(props, { relatedStylesInfo, relatedProductsInfo, onClick }) {

  const { name, category } = props;

  return (
    <Card border="primary" style={{ width: '18rem' }}>

      <div>

        <sup>
          <Button variant="outline-*" size="sm" style={{display: 'flex', justifyContent: 'right'}} onClick={(e) => props.onClick}> ⭐️ </Button>
        </sup>

        <Card.Img src={"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"} width="150" height="150"></Card.Img>
        <Card.Body>
          <Card.Title>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            {props.name}
            </div>
          </Card.Title>

          <Card.Text>
            <div style={{ display: 'flex', justifyContent: 'center' }} >{props.category}</div>
            <div style={{ display: 'flex', justifyContent: 'center' }} >PRICE</div>
            <div style={{ display: 'flex', justifyContent: 'center' }} >RATING</div>
          </Card.Text>

        </Card.Body>
      </div>

    </Card>
  );
}

export default RelatedCard