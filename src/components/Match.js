import React, { useState } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import { Button} from "@material-ui/core";
import Adddrop from "./Adddrop";

import Addmatch from "./Addmatch";

export default function Match() {
    const [cout, setCout] = useState(1);
    const [value, setValue] = React.useState("");
    const [option, setOption] = useState([0]);
    const [changecolor,setchangecolor]=useState([0]);
    const [code,setCode]=useState(["red","black","blue","yellow","green","grey","purple","orange","pink","lightblue"])
    const [colcode,setColcode]=useState(["red"]);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const addoption = () => {
      
      setColcode((old)=>{
        return[...old,code[colcode.length]];
      })
      console.log("ADDOPTION CALL")
      setCout((old)=>{return old+1});
      console.log("cout",cout)
      setOption((old)=>{
        return[...old,cout];
      
      setchangecolor((old)=>{return old+1});
      
      });
      console.log(option);
    };
  
    const remove = (id,option) => {
      console.log('deleted.')
      
      setColcode((old)=>{
        return old.filter((arr,index)=>{
          console.log("arr",arr);
          console.log("index",index);
          console.log("id",id);
          return index!=colcode.length-1;
        })
  
      })
      
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
            return(<Addmatch key={item.cout} value={item.value} id={index}
            remove={remove}
            color={code[index]}
            code={code}
            colcode={colcode}
            option={option}
             />
          )})
          }
            
        </RadioGroup>
        <div className="messageSender__option"></div>
      </FormControl>
      <br />
      <Button onClick={addoption}>Add Option</Button>
      {/* <Button onClick={remove}>Remove Option</Button> */}
    </>
    )
}
