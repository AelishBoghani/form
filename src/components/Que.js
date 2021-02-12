import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Que.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import ShortTextIcon from "@material-ui/icons/ShortText";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DateRangeIcon from "@material-ui/icons/DateRange";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AdjustIcon from "@material-ui/icons/Adjust";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import TitleIcon from "@material-ui/icons/Title";
import DehazeIcon from "@material-ui/icons/Dehaze";
import SendIcon from "@material-ui/icons/Send";
import Shortans from "./Shortans";
import Paragraph from "./Paragraph";
import Multichoice from "./Multichoice";
import Time from "./Time";
import Date from "./Date";
import Dropdown from "./Dropdown";
import Linescale from "./Linescale";
import Checkbox from "./CheckboxesGroup";
import Fileupload from "./Fileupload";
import TimerIcon from '@material-ui/icons/Timer';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import Match from './Match';

// import { useStateValue } from './StateProvider';
// import db from './firebase'
// import firebase from 'firebase'

function Que() {
  let body;
  //   const [{user} , dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [inputURL, setInputURL] = useState("");
  const [option, setOption] = useState("Shortanswer");
  
  const handleSubmit = (e) => {
    // e.preventDefault();
    // db.collection('posts').add({
    //   message: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   profilePic: user.photoURL,
    //   username: user.displayName,
    //   image: inputURL
    // })
    // setInput('');
    // setInputURL('');
  };
  
  if (option === "Shortanswer") {
    body = (
      <div>
        <Shortans />
      </div>
    );
  } else if (option === "Paragraph") {
    body = (
      <div>
        <Paragraph />
      </div>
    );
  } else if (option === "Multiple choice") {
    body = (
      <div>
        <Multichoice />
      </div>
    );
  } else if (option === "Dropdown") {
    body = (
      <div>
        <Dropdown />
      </div>
    );
  
  } else if (option === "Checkboxes") {
    body = (
      <div>
        <Checkbox />
      </div>
    );
  } else if (option === "Linear scale") {
    body = (
      <div>
        <Linescale />
      </div>
    );
  } else if (option === "File upload") {
    body = (
      <div>
        <Fileupload />
      </div>
    );
  } else if (option === "Date") {
    body = (
      <div>
        <Date />
      </div>
    );
  } else if (option === "Match line") {
    body = (
      <div>
        <Match />
      </div>
    );
  } else if (option === "Time") {
    body = (
      <div>
        <Time />
      </div>
    );
  }

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        {/* <Avatar className="avatar__style" /> */}
        <form className="form__top">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="messageSender__input"
            placeholder={`Enter your question.....`}
          />
          <TimerIcon className="timer" ></TimerIcon>
          
          <FormControl className="app_dropdown">
            <Select
              variant="outlined"
              onChange={(e) => setOption(e.target.value)}
              defaultValue="Shortanswer"
            >
              <MenuItem value="Shortanswer">
                <ShortTextIcon />
                Short answer
              </MenuItem>
              <MenuItem value="Paragraph">
                <ViewHeadlineIcon />
                Paragraph
              </MenuItem>
              <MenuItem value="Multiple choice">
                <AdjustIcon />
                Multiple choice
              </MenuItem>
              <MenuItem value="Checkboxes">
                <CheckBoxIcon />
                Checkboxes
              </MenuItem>
              <MenuItem value="Dropdown">
                <ArrowDropDownCircleIcon />
                Dropdown
              </MenuItem>
              <MenuItem value="File upload">
                <CloudUploadIcon />
                File upload
              </MenuItem>
              <MenuItem value="Linear scale">
                <LinearScaleIcon />
                Linear scale
              </MenuItem>
              <MenuItem value="Match line">
                <CompareArrowsIcon />
                Match the following
              </MenuItem>
              
              <MenuItem value="Date">
                <DateRangeIcon />
                Date
              </MenuItem>
              <MenuItem value="Time">
                <QueryBuilderIcon />
                Time
              </MenuItem>
            </Select>
          </FormControl>
          
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="body__style">{body}</div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <AttachFileIcon style={{ color: "red" }} />
          <h3>Import Question</h3>
        </div>
        <div className="messageSender__option">
          <TitleIcon style={{ color: "red" }} />
          <h3>Add title and description</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Add Image</h3>
        </div>
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Add Video</h3>
        </div>

        <div className="messageSender__option">
          <DehazeIcon style={{ color: "orange" }} />
          <h3>Add Section</h3>
        </div>
        <div className="messageSender__option">
          <SendIcon style={{ color: "orange" }} />
          <h3>Add</h3>
        </div>
      </div>
    </div>
  );
}

export default Que;
