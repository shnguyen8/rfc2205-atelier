import React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import FilterStars from './filterStars.jsx'


const avgRating = (ratingsObj) => {
  let totalScore = 0;
  let ratings = numberOfRatings(ratingsObj);
  for (var key in ratingsObj) {
    let score = Number(ratingsObj[key]) * Number(key);
    totalScore += score ;
  }
  let avg = totalScore / ratings;
  avg = Math.round(avg * 10) / 10;
  return avg || 0.0
}

const numberOfRatings = (ratingsObj) => {
  let total = 0;
  for(var key in ratingsObj){
    let number = Number(ratingsObj[key])
    total += number
  }
  return total;
}

const percentRecommend = (recObj) => {
  if(recObj){
    let totalTrue = Number(recObj['true']) || 0;
    let totalFalse = Number(recObj.false) || 0;
    let percent = totalTrue / (totalTrue + totalFalse) * 100 || 0;
    return Math.floor(percent)
  } else {
    return null;
  }
}

const formatDate = (date) => {
  //input date 2022-04-14T00:00:00.000Z
  //output Month DD, YYYY
  let months = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let formatted  = ''
  let dateArr = date.split('-');
  let month = Number(dateArr[1]) - 1
  month = months[month]
  let day = dateArr[2].slice(0,2)
  let year = dateArr[0]
  formatted = month + ' ' + day + ', ' + year
  return formatted

}


export {avgRating, numberOfRatings, percentRecommend, formatDate}

