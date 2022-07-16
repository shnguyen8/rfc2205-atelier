import React from 'react';
import {numberOfRatings} from './helpers.jsx';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

class FilterStars extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterOn: false,
      hoverOn: false
    }
  }

    handleFilterClick = (stars) => {
      this.setState({
        filterOn: !this.state.filterOn
      })
    }

    handleFilterHover = (event) => {
      this.setState({
        hoverOn: !this.state.hoverOn
      })
    }

    buildStyles = () => {
      let styles = {}

      if(this.state.hoverOn){
        styles['background'] = 'green'
      }
      if(this.state.filterOn){
        styles['font-weight'] = 'bold'
      }
      return styles
    }

    render(){

      let filterStyles = this.buildStyles()

      return(
        <React.Fragment>
        <span style = {filterStyles} onClick = {() => {this.handleFilterClick(this.props.stars)}} onMouseEnter = {this.handleFilterHover} onMouseLeave = {this.handleFilterHover}>
        {this.props.stars} Stars < BorderLinearProgress variant="determinate" value = {this.props.percent}  />
        </span>
        </React.Fragment>
      )

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

  export default FilterStars;