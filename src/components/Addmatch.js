import React from "react";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import ClearIcon from "@material-ui/icons/Clear";
import "./Addradio.css";
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Select from '@material-ui/core/Select';

export default function Addmatch(props,setchangecolor) {
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const handleChange = (event) => {
    const color = event.target.name;
    setState({
      ...state,
      [color]: event.target.value,
    });
  };
  console.log(props.code)
    return (
        <div>
      <div className="radio__button" style={{ display: "flex" }}>
        <div>
          <form>
            <label>
              {props.id + 1}
              <FiberManualRecordIcon  style={{ color: `${props.color}`, marginTop: "7px", cursor: "pointer" }}  />
              <input type="text" name="option" className="input_type" />
              <CompareArrowsIcon className="match__icon"/>
              <input type="text" name="option" className="input_type" />
            </label>
          </form>
        </div>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
         
          {

            props.colcode.map((color,index)=>{
              return(
                <option value={color}>{color}</option>
              )
            })
          }
        </Select>
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
    )
}
