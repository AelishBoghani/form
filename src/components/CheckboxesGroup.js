import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Addcheckbox from './Addcheckbox';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });
  const [cout, setCout] = useState(1);
  const [option, setOption] = useState([0]);
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


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <>
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
        
        {option.map((item,index) => {
            return(<Addcheckbox key={item.cout} value={item.value} id={index}
            remove={remove}
            option={option} />
          )})
          }
         
        </FormGroup>
      </FormControl>

     
      
    </div>
    <button onClick={addoption}>Add Option</button>
    </>
  );
}