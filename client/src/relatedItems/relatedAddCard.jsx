import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AddCard(props, { relatedStylesInfo, relatedProductsInfo, onClick }) {

  const { name, category } = props;

  return (
    <Card border="dark" style={{ width: '18rem' }} onClick={(e)=> props.onClick()}>

      <div>

        {/* <sup>
          <Button variant="outline-*" size="sm" style={{display: 'flex', justifyContent: 'right'}} onClick={(e) => props.onClick}> ❌ </Button>
        </sup> */}

        <Card.Img src={'https://www.nicepng.com/png/detail/251-2519428_0-add-icon-white-png.png'}>
        </Card.Img>

        <Card.Body>
          <Card.Title>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            ADD TO OUTFIT
            </div>
          </Card.Title>

        </Card.Body>
      </div>

    </Card>
  );
}

export default AddCard