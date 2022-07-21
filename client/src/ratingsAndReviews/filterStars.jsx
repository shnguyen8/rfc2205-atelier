import React from 'react';
import {numberOfRatings} from './helpers.jsx';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

class FilterStars extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hoverOn: false
    }
  }

    handleMouseLeave = (event) => {
      this.setState({
        hoverOn: false
      })
    }

    handleMouseEnter = (event) => {
      this.setState({
        hoverOn: true
      })
    }

    buildStyles = () => {
      let styles = {
        fontSize : '12px',
        margin: 0,
      }
      if(this.state.hoverOn){
        styles['background'] = '#428047'
      }
      if(this.props.filterOn){
        styles['fontWeight'] = 'bold'
      }
      return styles
    }

    render(){

      let filterStyles = this.buildStyles()

      return(
        <React.Fragment>
        <span style = {filterStyles} onClick = {() => {this.props.setFilter(this.props.stars)}} onMouseEnter = {this.handleMouseEnter} onMouseLeave = {this.handleMouseLeave}>
        {this.props.stars} stars < BorderLinearProgress variant="determinate" value = {this.props.percent}  />
        </span>
        </React.Fragment>
      )
    }

  }

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    width: 150,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: theme.palette.mode === 'light' ? '#428047' : '#308fe8',
    },
  }));

  export default FilterStars;