import React from 'react'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import Radio from "@material-ui/core/Radio";
import ClearIcon from '@material-ui/icons/Clear';
import './Addradio.css'
function Addradio(props) {
  return (
    <div>
      <div className="radio__button" style={{ display: "flex" }}>
        <div>
          <FormControlLabel
            value="one"
            control={<Radio />}
            label={
              <form>
                <label>
                  <input type="text" name="option" className="input_type" />
                </label>
              </form>
            }
          />
        </div>
        <div>
          <PhotoLibraryIcon style={{ color: "blue", marginTop: "7px",cursor:"pointer" }} />
        </div>
       
        <ClearIcon  className="remove" onClick={() => {
          props.remove(props.id, props.option);
        }}></ClearIcon>
      </div>

    </div>
  )
}

export default Addradio