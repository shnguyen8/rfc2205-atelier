
import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


export default function StarRating(rating) {

  if (rating) {
    return (
    <React.Fragment>
    <Rating precision={0.25} value={rating} size = "small" readOnly/>
    </React.Fragment>
    )
  } else {
    return null;
  }

}

