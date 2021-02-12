import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

function Paragraph() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-secondary"
          label="Paragraph"
          color="secondary"
        />
      </form>
    </div>
  );
}

export default Paragraph;
