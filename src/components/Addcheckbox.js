import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import "./Addradio.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ClearIcon from '@material-ui/icons/Clear';

function Addcheckbox(props) {
    return (
        <div>
          <FormControlLabel className="addbox"
            control={<Checkbox  onChange={props.handleChange} name="jason" />}
            label={
                <form>
                  <label>
                    <input type="text" name="option"  className="input_type"/>
                  </label>
                </form>
              }
          />
        <PhotoLibraryIcon style={{ color: "blue", marginTop: "7px",cursor:"pointer"  }} />
        <ClearIcon  className="remove" onClick={() => {
          props.remove(props.id, props.option);
        }}></ClearIcon>
            
        </div>
    )
}

export default Addcheckbox