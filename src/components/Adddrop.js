import React from "react";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import ClearIcon from "@material-ui/icons/Clear";
import "./Addradio.css";

function Adddrop(props) {
  return (
    <div>
      <div className="radio__button" style={{ display: "flex" }}>
        <div>
          <form>
            <label>
              {props.id + 1}
              <input type="text" name="option" className="input_type" />
            </label>
          </form>
        </div>
        <div>
          <PhotoLibraryIcon
            style={{ color: "blue", marginTop: "7px", cursor: "pointer" }}
          />
        </div>

        <ClearIcon
          className="remove"
          onClick={() => {
            props.remove(props.id, props.option);
          }}
        ></ClearIcon>
      </div>
    </div>
  );
}

export default Adddrop;
