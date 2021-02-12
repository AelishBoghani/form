import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Textfield.css'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '65%',
      overflow:'hidden',
      fontSize:50,
      marginLeft:'17%',
      
    },
   
    display: 'flex',
    marginTop: '30px',
    flexDirection: 'column',
    backgroundColor: 'rgb(243, 239, 239)',
    borderRadius: '15px',
    boxShadow: '0px 5px 7px -7px rgba(0, 0, 0, 0.75)',
    width: '100%',
    

  
  },
  
}));

export default function BasicTextField() {
  const classes = useStyles();
  const[title1,settitel1]=useState();
  const[title2,settitel2]=useState();
  const store1=(e)=>{
    settitel1(e.target.value
    );
  }
  const store2=(e)=>{
    settitel2(e.target.value);
  }

  return (
    <form className="root" noValidate autoComplete="off">
    <h1>{title1}</h1>
    <h1>{title2}</h1>
      <TextField className="text" 
      onChange={store1}
       InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
       id="standard-basic" label="Untitled Form" /><br></br>
      <TextField className="text"
        onChange={store2}
       InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
       id="standard-basic" label="Description" />
    </form>
  );
}