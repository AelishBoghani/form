import React from 'react';
import './Todolist.css';
const Todolist=(props)=>{
    
    return(<>
    <li className="text">{props.text}
     <button className="Removebutton" onClick={()=>{
         props.onSelect(props.id);   
     }}>Remove</button>
     </li>
    </>
    );
}
export default  Todolist;