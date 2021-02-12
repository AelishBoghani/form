import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Input } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  const classes = useStyles();
  const [startval,setStartval]=useState(1);
  const [endval,setEndval]=useState(10);
  function valuetext(value) {
    return `${value}`;
  }
 
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Linear Scale
      </Typography>
      {/* <form>
                  <label>
                    <input type="text" name="option" placeholder="start value"  className="input_type" onChange={(e)=>{setStartval(e.target.value)}}/>
                    <input type="text" name="option" placeholder="end value"  className="input_type"  onChange={(e)=>{setEndval(e.target.value)}}/>
                  </label>
                </form> */}
               
      <Slider
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10 }
        
      />
      
    </div>
  );
}
