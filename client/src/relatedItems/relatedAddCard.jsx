import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AddCard(props, { relatedStylesInfo, relatedProductsInfo, onClick }) {

  const { name, category } = props;

  return (
    <Card border="dark" style={{ width: '16rem'}} onClick={(e)=> props.onClick()}>

      <div>



        <Card.Img src={'https://www.nicepng.com/png/detail/251-2519428_0-add-icon-white-png.png'}>
        </Card.Img>

        <Card.Body>
          <Card.Title className="font-styles">
            <div style={{display: 'flex', justifyContent: 'center'}}>
            ADD
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            TO
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            OUTFIT
            </div>
          </Card.Title>

        </Card.Body>
      </div>

    </Card>
  );
}

export default AddCard