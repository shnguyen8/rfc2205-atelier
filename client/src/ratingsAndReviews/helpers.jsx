import React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import FilterStars from './filterStars.jsx';
import ReviewPhoto from './reviewPhoto.jsx'


const avgRating = (ratingsObj) => {
  let totalScore = 0;
  let ratings = numberOfRatings(ratingsObj);
  for (var key in ratingsObj) {
    let score = Number(ratingsObj[key]) * Number(key);
    totalScore += score;
  }
  let avg = totalScore / ratings;
  avg = Math.round(avg * 10) / 10;
  return avg || 0.0
}

const numberOfRatings = (ratingsObj) => {
  let total = 0;
  for (var key in ratingsObj) {
    let number = Number(ratingsObj[key])
    total += number
  }
  return total;
}

const percentRecommend = (recObj) => {
  if (recObj) {
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
  let formatted = ''
  let dateArr = date.split('-');
  let month = Number(dateArr[1]) - 1
  month = months[month]
  let day = dateArr[2].slice(0, 2)
  let year = dateArr[0]
  formatted = month + ' ' + day + ', ' + year
  return formatted

}

const charMapper = (charsObj) => {
  var list = []
  var ratings = {
    Size: ['too small', 'perfect', 'too wide'],
    Width: ['too narrow', 'perfect', 'too wide'],
    Comfort: ['uncomfortable', 'ok', 'perfect'],
    Quality: ['poor', 'expected', 'perfect'],
    Length: ['runs short', 'perfect', 'runs long'],
    Fit: ['runs tight', 'perfect', 'runs long']
  }
  for (var key in charsObj) {

    var length = Math.floor(Number(charsObj[key].value) / 5 * 150)

    list.push(
      <div style={{ width: '150px', 'marginBottom': '7px' }}>
        {key}: <br />
        <div className='line' style={{ 'backgroundColor': '#eeeeee', width: '150px', height: '8px', 'marginBottom': '4px' }}>
          <div className='lineSectionSpacing' style={{ 'display': 'flex', 'justifyContent': 'space-evenly', 'position': 'absolute', 'z-index': '1' }}>
            <div className='section' style={{ 'backgroundColor': 'white', height: '10px', width: '5px', 'marginLeft': '47px' }} />
            <div className='section' style={{ 'backgroundColor': 'white', height: '10px', width: '5px', 'marginLeft': '47px' }} />
          </div>
          <div className='triangle' style={{ 'marginLeft': `${length}px` }} />
        </div>
        <div className='labels' style={{ 'fontSize': '8pt', 'display': 'flex', 'justifyContent': 'space-between', width: '150px', height: '8pt' }}>
          <p>{ratings[key][0]}</p>
          <p>{ratings[key][1]}</p>
          <p>{ratings[key][2]}</p>
        </div>

      </div>
    )
  }

  return (
    <React.Fragment>
      {list}
      <br />
    </React.Fragment>
  )
}

var sectionStyle = {
  'backgroundColor': 'white',
  height: '10px',
  width: '5px'
}

const displayThumbnails = (photosArray) => {

  if (photosArray.length > 0) {
    return photosArray.map(photo => {
      if (typeof photo === 'object') {
        return <ReviewPhoto url={photo.url} key={photo.id} />
      } else {
        return <ReviewPhoto url={photo} />
      }
    })
  } else {
    return <span class='empty'></span>
  }
}


export { avgRating, numberOfRatings, percentRecommend, formatDate, charMapper, displayThumbnails }

