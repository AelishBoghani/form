import React, { useState } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import { Button} from "@material-ui/core";
import Adddrop from "./Adddrop";

function Dropdown() {
  const [cout, setCout] = useState(1);
  const [value, setValue] = React.useState("");
  const [option, setOption] = useState([0]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addoption = () => {
    console.log("ADDOPTION CALL")
    setCout((old)=>{return old+1});
    console.log("cout",cout)
    setOption((old)=>{
      return[...old,cout];
    });
    console.log(option);
  };

  const remove = (id,option) => {
    console.log('deleted.')
    setOption((old)=>{
      return old.filter((arr,index)=>{
        console.log("arr",arr);
        console.log("index",index);
        console.log("id",id);
        return index!=id;
      })

    })

    console.log(option);
  };
  return (
    <>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="option"
          name="option1"
          value={value}
          onChange={handleChange}
        >
          {option.map((item,index) => {
            return(<Adddrop key={item.cout} value={item.value} id={index}
            remove={remove}
            option={option} />
          )})
          }
            
        </RadioGroup>
        <div className="messageSender__option"></div>
      </FormControl>
      <br />
      <Button onClick={addoption}>Add Option</Button>
      {/* <Button onClick={remove}>Remove Option</Button> */}
    </>
  );
}

export default Dropdown;