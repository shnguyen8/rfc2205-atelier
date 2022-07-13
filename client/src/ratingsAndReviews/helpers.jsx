import React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';


const avgRating = (ratingsObj) => {
  let totalScore = 0;
  let ratings = numberOfRatings(ratingsObj);
  for (var key in ratingsObj) {
    let score = Number(ratingsObj[key]) * Number(key);
    totalScore += score ;
  }
  let avg = totalScore / ratings;
  avg = Math.round(avg * 10) / 10;
  return avg;
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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: 100,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.mode === 'light' ? '#DAF7A6' : '#308fe8',
  },
}));

const ratingSummary = (ratingsObj) => {

  if(ratingsObj === undefined){
    return null;
  }

  let total = numberOfRatings(ratingsObj);
  let findValue = (property) => {
    let percent = Number(ratingsObj[property]) || 0
    return Math.floor(percent / total * 100)
  }
  let five = findValue(5)
  let four = findValue(4)
  let three = findValue(3)
  let two = findValue(2)
  let one = findValue(1)

  return (
  <div>
  5 Stars <BorderLinearProgress variant="determinate" value={five} />
  4 Stars <BorderLinearProgress variant="determinate" value={four} />
  3 Stars <BorderLinearProgress variant="determinate" value={three} />
  2 Stars <BorderLinearProgress variant="determinate" value={two} />
  1 Stars <BorderLinearProgress variant="determinate" value={one} />
  </div>
  )
}


export {ratingSummary, avgRating, numberOfRatings, percentRecommend}

