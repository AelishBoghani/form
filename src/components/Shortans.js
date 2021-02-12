import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Shortans() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-secondary"
          label="Short answer"
          color="secondary"
        />
       
      </form>
    </div>
  );
}

export default Shortans;
